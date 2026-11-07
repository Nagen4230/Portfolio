import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { RESUME_DATA } from '../../data/content';

interface Message {
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const AIAssistantDrawer: React.FC<AIAssistantDrawerProps> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Hello! I am Nagendran's verified AI Career Assistant. Ask me anything about his Universiti Malaya software engineering studies, perfect 4.00 matriculation CGPA, C++/Python stack, UI/UX designs, or video editing background.",
      time: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (userText: string) => {
    const text = userText.trim();
    if (!text) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { sender: 'user', text, time: timeStr }]);
    setInputValue('');
    setIsTyping(true);

    // AI Logic processing against resume data
    setTimeout(() => {
      const lower = text.toLowerCase();
      let matchedAnswer = '';

      // Match against predefined resume triggers
      for (const faq of RESUME_DATA.aiKnowledge.faqMap) {
        if (faq.triggers.some(t => lower.includes(t))) {
          matchedAnswer = faq.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        if (lower.includes("who") || lower.includes("about") || lower.includes("nagendran")) {
          matchedAnswer = `${RESUME_DATA.candidate.name} is a 1st-Year Software Engineering Student at Universiti Malaya (UM) with a rare blend of computational rigor (4.00 CGPA, competitive programming), UI/UX design, and cinematic video editing leadership.`;
        } else if (lower.includes("badminton") || lower.includes("club") || lower.includes("leadership")) {
          matchedAnswer = "Nagendran served as President of the Badminton Club at Pahang Engineering Matriculation College, organizing campus-wide tournaments while maintaining a 4.00 CGPA. He also served as President of the ICT & Multimedia Club at SMK Seri Tualang, training junior students.";
        } else if (lower.includes("award") || lower.includes("competition") || lower.includes("honor")) {
          matchedAnswer = "Nagendran's major accolades include: 2nd Runner-Up in the State-Level Coding Competition, 2x Consecutive Gold Medalist at IIDEX (2017 & 2018), and Gold Medalist (2017) at the International Young Inventors Award (IYIA).";
        } else {
          matchedAnswer = `Thank you for asking about Nagendran! He is currently a 1st-year Software Engineering student at UM (4.00 Matriculation CGPA). You can check his 'Engineering Stack', 'Design & Video Process', or 'Academic & Project Highlights' using the quick chips below or contact him directly at ${RESUME_DATA.candidate.email}.`;
        }
      }

      setMessages(prev => [...prev, {
        sender: 'ai',
        text: matchedAnswer,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Toggle Button (Always visible on bottom-right) */}
      <button
        onClick={isOpen ? onClose : onOpen}
        aria-label="Toggle AI Career Assistant"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-4 py-3 rounded-full bg-obsidian-900 border border-crimson-600/60 shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.7)] hover:border-crimson-500 transition-all duration-300"
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-crimson-600 flex items-center justify-center text-white shadow-md">
            <Bot className="w-4 h-4" />
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full border-2 border-obsidian-900 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-[10px] uppercase font-mono tracking-wider text-gold-400 font-bold">Recruiter AI</p>
          <p className="text-xs font-semibold text-neutral-200 group-hover:text-white transition">Chat with Assistant</p>
        </div>
      </button>

      {/* Slide-out Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-obsidian-900/95 backdrop-blur-xl border-l border-crimson-600/30 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="AI Career Assistant Chat"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-neutral-800 bg-[#0e0e14]/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-crimson-600 to-crimson-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                <Bot className="w-5 h-5" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-obsidian-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">Recruiter AI Assistant</h3>
                <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-gold-500/20 text-gold-400 border border-gold-500/30">
                  TRAINED
                </span>
              </div>
              <p className="text-[11px] text-neutral-400">Trained on Nagendran's Official Resume & Records</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Question Chips */}
        <div className="p-3 bg-[#0a0a0d] border-b border-neutral-800/80 overflow-x-auto scrollbar-none flex gap-2">
          {RESUME_DATA.aiKnowledge.quickChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(chip)}
              className="text-[11px] font-mono px-2.5 py-1 rounded-full whitespace-nowrap bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-crimson-500 hover:text-crimson-400 transition"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-crimson-600 text-white rounded-br-none shadow-[0_0_15px_rgba(220,38,38,0.35)]'
                    : 'bg-[#15151d] text-neutral-200 border border-neutral-800 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-neutral-500 mt-1 px-1">{msg.time}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-[#15151d] border border-neutral-800 w-20">
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-bounce [animation-delay:0.15s]" />
              <span className="w-2 h-2 rounded-full bg-crimson-500 animate-bounce [animation-delay:0.3s]" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Prompt Input Form */}
        <div className="p-4 border-t border-neutral-800 bg-[#0c0c10]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputValue);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about CGPA, C++, Figma, video projects..."
              className="flex-1 bg-obsidian-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-crimson-500 focus:ring-1 focus:ring-crimson-500 font-sans"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-crimson-600 text-white hover:bg-crimson-500 disabled:opacity-40 disabled:hover:bg-crimson-600 transition shadow-[0_0_15px_rgba(220,38,38,0.4)]"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-2 text-[10px] text-center text-neutral-500 font-mono">
            Powered by factual resume data • Zero hallucinations
          </div>
        </div>
      </div>

      {/* Dim overlay on mobile when open */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-40 sm:hidden backdrop-blur-sm"
          aria-hidden="true"
        />
      )}
    </>
  );
};
