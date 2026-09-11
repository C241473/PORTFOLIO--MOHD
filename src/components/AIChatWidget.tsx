import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Greetings! I am Tanzirul's AI Literary & Journalism Assistant ✨. Ask me anything about Mohd Tanzirul Ahsan's BA English studies, debate titles, news reporting, or karate achievements!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const suggestedQuestions = [
    'Tell me about your English Literature BA at IIUC',
    'What news reporting experience do you have?',
    'What debate championships have you won?',
    'How can I contact Tanzirul Ahsan?',
  ];

  const generateAIResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('english') || q.includes('iiuc') || q.includes('degree') || q.includes('education') || q.includes('semester')) {
      return "Tanzirul is an undergraduate student pursuing BA (Honours) in English Language & Literature at IIUC (8th Sem). He also achieved GPA 4.93 in Alim (2021) and GPA 4.81 in Dakhil (2019) at Jameya Ahmadia Sunnia Kamil Madrasah.";
    }

    if (q.includes('news') || q.includes('reporter') || q.includes('journalism') || q.includes('khabar') || q.includes('write')) {
      return "Tanzirul works as a Staff Reporter for 'Khabar 24 Ghonta', gathering news, conducting interviews, writing press reports, and adhering to strict journalistic ethics.";
    }

    if (q.includes('debate') || q.includes('champion') || q.includes('ells') || q.includes('asian')) {
      return "Tanzirul is the Champion of the Inter-Semester English Debate Competition Spring 2026 and was named 'Debater of the Final' in the ELLS Debate Tournament 2025!";
    }

    if (q.includes('cultural') || q.includes('karate') || q.includes('poem') || q.includes('sports')) {
      return "Tanzirul won 2nd Place in Poem Recitation (Spring Cultural Competition 2026) and 3rd Place in Mujib Centenary Police Commissioner Cup Karate Competition 2021!";
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('address')) {
      return "You can reach Tanzirul directly via Mobile: +8801773225355 or Email: tanzirulahsan@gmail.com. Address: Tankir Pahar Road, Lalkhan Bazar, Chattogram, Bangladesh.";
    }

    return "Thank you for asking! Mohd Tanzirul Ahsan is an English Language & Literature undergraduate at IIUC, Staff Reporter at Khabar 24 Ghonta, and Inter-Semester Debate Champion 2026. Feel free to ask any question!";
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = generateAIResponse(text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Assistant"
          className="group relative flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-paper/90 px-4 py-2.5 shadow-[0_0_25px_rgba(0,230,118,0.3)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(0,230,118,0.5)] cursor-pointer"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 via-teal-500 to-amber-500 text-black text-sm font-bold shadow-md">
            <Bot className="h-4 w-4 text-black" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
          </span>
          
          <span className="flex flex-col text-left font-mono leading-none">
            <span className="text-xs font-semibold text-ink flex items-center gap-1">
              Ask Tanzirul AI
              <Sparkles className="h-3 w-3 text-emerald-400 animate-pulse" />
            </span>
            <span className="text-[0.58rem] uppercase tracking-wider text-emerald-400 font-bold">
              Literary Bot Active
            </span>
          </span>
        </button>
      </div>

      {/* AI Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-100 h-130 max-h-[80vh] flex flex-col rounded-2xl border border-emerald-500/30 bg-paper/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom-5 duration-300 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ink/15 px-4 py-3 bg-linear-to-r from-emerald-500/10 via-amber-500/10 to-transparent">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/40">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-ink flex items-center gap-1.5">
                  Tanzirul AI Assistant
                  <span className="text-[0.58rem] font-mono uppercase bg-emerald-400/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-400/30">v2.5</span>
                </h3>
                <p className="font-mono text-[0.6rem] text-ink-muted flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Press & English Literature KB
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-ink-muted hover:text-emerald-400 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="h-6 w-6 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center text-xs shrink-0 border border-emerald-400/30">
                    <Sparkles className="h-3 w-3" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-linear-to-r from-emerald-500 to-amber-500 text-black font-medium rounded-tr-none'
                      : 'bg-ink/5 border border-ink/10 text-ink rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="block text-[0.55rem] font-mono opacity-60 text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-ink-muted font-mono text-[0.65rem] pl-2">
                <Sparkles className="h-3 w-3 text-emerald-400 animate-spin" />
                <span>Tanzirul AI is formulating response...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="px-3 py-2 border-t border-ink/10 bg-ink/[0.02]">
            <div className="flex gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="whitespace-nowrap border border-emerald-400/30 bg-emerald-400/5 px-2.5 py-1 rounded-full font-mono text-[0.6rem] text-emerald-400 hover:bg-emerald-400/20 transition-colors shrink-0 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 border-t border-ink/15 flex items-center gap-2 bg-paper"
          >
            <input
              type="text"
              placeholder="Ask about Tanzirul's debate titles, reports..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 border border-ink/20 bg-ink/5 px-3 py-2 rounded-lg font-sans text-xs text-ink placeholder:text-ink-muted/50 focus:border-emerald-400 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-emerald-400 to-amber-500 text-black hover:opacity-90 disabled:opacity-40 transition-opacity cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
