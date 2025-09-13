import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage } from '@/types/campus';
import { campusData } from '@/data/campusData';
import { campusCategories } from '@/types/campus';

export const CampusChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hello! I'm your Smart Campus Assistant. I can help you with information about class schedules, facilities, dining options, library services, and administrative procedures. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findBestMatch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    // First, try to find exact matches in questions
    let bestMatch = campusData.find(item => 
      item.question.toLowerCase().includes(lowerQuery) ||
      item.tags.some(tag => lowerQuery.includes(tag.toLowerCase()))
    );

    // If no exact match, find partial matches
    if (!bestMatch) {
      bestMatch = campusData.find(item => {
        const words = lowerQuery.split(' ');
        return words.some(word => 
          item.question.toLowerCase().includes(word) ||
          item.answer.toLowerCase().includes(word) ||
          item.tags.some(tag => tag.toLowerCase().includes(word))
        );
      });
    }

    return bestMatch;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const bestMatch = findBestMatch(inputValue);
      
      let response = "I'm sorry, I couldn't find specific information about that. Could you try rephrasing your question or ask about:\n\n";
      let category = '';

      if (bestMatch) {
        response = bestMatch.answer;
        category = bestMatch.category;
      } else {
        response += campusCategories.map(cat => `${cat.icon} ${cat.name}`).join('\n');
      }

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date(),
        category,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col h-full max-h-[600px]">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-subtle border-b">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-soft ${
                message.isUser 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-accent text-accent-foreground'
              }`}>
                {message.isUser ? <User size={16} /> : <Bot size={16} />}
              </div>
              
              <Card className={`p-3 transition-smooth ${
                message.isUser 
                  ? 'bg-primary text-primary-foreground shadow-campus' 
                  : 'bg-card shadow-soft'
              }`}>
                <div className="space-y-2">
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.content}
                  </p>
                  
                  {message.category && (
                    <Badge variant="secondary" className="text-xs">
                      {campusCategories.find(cat => cat.id === message.category)?.icon} {' '}
                      {campusCategories.find(cat => cat.id === message.category)?.name}
                    </Badge>
                  )}
                  
                  <p className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-soft">
                <Sparkles size={16} className="animate-pulse" />
              </div>
              <Card className="p-3 bg-card shadow-soft">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </Card>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div className="p-4 border-b bg-card">
        <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {[
            "What are library hours?",
            "Where is the student center?",
            "Dining hall hours?",
            "How to add classes?"
          ].map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="text-xs transition-spring hover:scale-105"
              onClick={() => handleQuickQuestion(question)}
            >
              {question}
            </Button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 bg-card">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about campus schedules, facilities, dining, library, or admin..."
            className="flex-1 transition-smooth focus:shadow-glow"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="px-6 gradient-campus hover:scale-105 transition-spring shadow-campus"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};