import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      console.error('Gemini API key is missing. Please set GEMINI_API_KEY in your .env file.');
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string, history: { role: string; text: string }[]) => {
  try {
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      return "I'm currently unavailable. The API key is not configured. Please contact Ali directly via email.";
    }

    const ai = getAiClient();
    
    // Build conversation history as text
    const conversationText = history.slice(-6).map(h => 
      `${h.role === 'user' ? 'User' : 'Assistant'}: ${h.text}`
    ).join('\n');

    // Strict system instruction to only use resume data
    const systemInstruction = `You are a professional AI assistant representing Ali Albattah. 

CRITICAL RULES - YOU MUST FOLLOW THESE STRICTLY:
1. ONLY use information provided in the resume data below
2. If asked about something NOT in the resume, politely say "I don't have that information in Ali's resume. Would you like to know about his experience, skills, or education instead?"
3. Do NOT make up, infer, or assume any information not explicitly stated in the resume
4. Be concise, professional, and helpful
5. Focus on Ali's professional background, experience, skills, education, and certifications
6. If asked personal questions not in the resume, redirect to professional topics
7. NEVER provide information that is not in the resume data

Resume Data:
${RESUME_CONTEXT}`;

    const fullPrompt = conversationText 
      ? `${systemInstruction}\n\nPrevious Conversation:\n${conversationText}\n\nUser: ${message}\nAssistant:`
      : `${systemInstruction}\n\nUser: ${message}\nAssistant:`;

    // Use generateContent with proper structure
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt
    });

    // Extract text from response - handle different response structures
    let responseText = '';
    
    if (typeof response === 'string') {
      responseText = response;
    } else if (response?.text) {
      responseText = response.text;
    } else if (response?.response?.text) {
      responseText = response.response.text;
    } else if ((response as any)?.candidates?.[0]?.content?.parts) {
      responseText = (response as any).candidates[0].content.parts
        .map((p: any) => p.text || '')
        .join('');
    } else if ((response as any)?.response?.candidates?.[0]?.content?.parts) {
      responseText = (response as any).response.candidates[0].content.parts
        .map((p: any) => p.text || '')
        .join('');
    }

    if (!responseText) {
      console.error('Unexpected response structure:', response);
      return "I apologize, but I couldn't generate a response. Please try rephrasing your question or contact Ali directly via email.";
    }

    return responseText;
  } catch (error: any) {
    console.error("Error communicating with Gemini:", error);
    
    // Provide more helpful error messages
    if (error?.message?.includes('API key') || error?.message?.includes('API_KEY')) {
      return "I'm currently unavailable. The API key is not configured correctly. Please contact Ali directly via email.";
    }
    if (error?.message?.includes('quota') || error?.message?.includes('rate limit') || error?.message?.includes('429')) {
      return "I'm experiencing high demand right now. Please try again in a moment or contact Ali directly via email.";
    }
    
    return "I'm currently unable to process your request. Please try again or contact Ali directly via email for immediate assistance.";
  }
};
