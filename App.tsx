import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Hero />
      <main>
        <Experience />
        <Skills />
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Ali Albattah. All rights reserved.</p>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
