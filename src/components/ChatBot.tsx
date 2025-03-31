
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, MinusCircle, Loader2, Heart } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 I'm your AI healthcare assistant. How can I help with your health questions today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    // Simulate AI response after delay
    setTimeout(() => {
      // Add bot response
      const healthResponses = [
        "I understand your health concern. Based on those symptoms, here's what I can tell you...",
        "That's a common health question. Here's what medical research suggests...",
        "I'm analyzing your symptoms. Remember, I'm an AI assistant and not a replacement for professional medical advice.",
        "I can provide some general health information about that. Here's what you should know...",
        "Thanks for sharing those details about your health. Let me help you understand what might be happening."
      ];
      const randomResponse = healthResponses[Math.floor(Math.random() * healthResponses.length)];
      
      const botMessage: Message = {
        id: Date.now(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className={`fixed z-50 bottom-6 right-6 rounded-full h-14 w-14 shadow-lg flex items-center justify-center ${
          isOpen ? 'hidden' : 'flex'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Widget */}
      <div
        className={`fixed z-50 bottom-6 right-6 w-full max-w-sm transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        } ${
          isMinimized ? 'h-16' : 'h-[480px]'
        }`}
      >
        <div className="chatbot-container flex flex-col h-full rounded-xl shadow-xl">
          {/* Header */}
          <div className="p-4 border-b border-border/40 flex items-center justify-between bg-primary/5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-sm">HealthAI Assistant</h3>
                <p className="text-xs text-foreground/70">Your personal health guide</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-7 w-7"
              >
                <MinusCircle className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-7 w-7"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl p-3 ${
                        msg.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted/70'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-[10px] opacity-70 text-right mt-1">
                        {formatTime(msg.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-xl p-3 bg-muted/70">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <p className="text-sm">Analyzing health data...</p>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messageEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={handleSendMessage}
                className="p-4 border-t border-border/40 flex items-center space-x-2"
              >
                <Input
                  type="text"
                  placeholder="Describe your symptoms or health concern..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
