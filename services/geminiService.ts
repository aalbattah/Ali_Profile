import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string, history: { role: string; text: string }[]) => {
  try {
    const ai = getAiClient();
    // We use generateContent with system instruction simulated via the prompt for simplicity in single-turn or simple chat, 
    // but here we can use the Chat API.
    
    // Construct the history for the chat model
    // Note: The @google/genai SDK chat history format might differ slightly, but usually it's role/parts.
    // However, for this simple portfolio, a direct generateContent with context is often more robust for specific Q&A 
    // without maintaining complex server-side state. We will use generateContent with the context prepended.
    
    // Simulating chat history in the prompt for the "context" window
    const conversation = history.map(h => `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.text}`).join('\n');
    
    const prompt = `
      ${RESUME_CONTEXT}
      
      Current Conversation:
      ${conversation}
      User: ${message}
      Assistant:
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a professional assistant representing Ali Albattah. Be concise, polite, and strictly relevant to his resume.",
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently unable to access the AI service. Please check your connection or API configuration.";
  }
};
