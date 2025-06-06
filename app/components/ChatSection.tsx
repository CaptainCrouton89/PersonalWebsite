"use client";

import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import { marked } from "marked";

const suggestedQuestions = [
  "What's your experience with AI?",
  "Tell me about your startup work",
  "What projects are you most proud of?",
  "How do you approach consulting?",
  "What's your development philosophy?",
  "What are you working on these days?",
];

export default function ChatSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, status, append } =
    useChat({
      api: "/api/chat",
    });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuestionClick = (question: string) => {
    setIsExpanded(true);
    append({ role: "user", content: question });
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-12">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          Let's have a conversation
        </h3>
        <p className="text-gray-300 text-base sm:text-lg">
          Ask me anything about my work, experience, or projects
        </p>
      </div>

      {/* Chat Container */}
      <div className="bg-gradient-to-br from-[#2a2a2a] via-[#313131] to-[#2a2a2a] rounded-2xl border border-[#404040] shadow-2xl overflow-hidden">
        {/* Quick Questions - Only show when no messages */}
        {messages.length === 0 && !isExpanded && (
          <div className="p-4 sm:p-6 border-b border-[#404040]">
            <p className="text-sm text-gray-400 mb-4 text-center">
              Start with a question:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="text-left p-3 sm:p-4 bg-[#3a3a3a] hover:bg-[#454545] rounded-xl border border-[#505050] hover:border-[#636aff] transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#636aff] rounded-full opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0"></div>
                    <span className="text-gray-200 group-hover:text-white transition-colors text-sm">
                      {question}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages Area */}
        {(messages.length > 0 || isExpanded) && (
          <div
            ref={messagesContainerRef}
            className="h-64 sm:h-80 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#2a2a2a]"
          >
            {messages.length === 0 && isExpanded && (
              <div className="text-center text-gray-400 py-8">
                <img
                  src="/assets/main2.png"
                  alt="Silas"
                  className="w-12 h-12 mx-auto mb-4 rounded-full object-cover"
                />
                <p>Ready to chat! What would you like to know?</p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[80%] ${message.role === "user" ? "" : ""}`}
                >
                  {message.role === "assistant" && (
                    <div className="flex items-center space-x-2 mb-2">
                      <img
                        src="/assets/main2.png"
                        alt="Silas"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-xs text-gray-400">Silas</span>
                    </div>
                  )}
                  
                  <div
                    className={`p-3 sm:p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-[#636aff] text-white text-right"
                        : "bg-[#3a3a3a] text-gray-100 border border-[#505050] text-left"
                    }`}
                  >
                    {/* Tool calls inside the message bubble */}
                    {message.role === "assistant" && message.parts && (
                      <div className="space-y-2">
                        {message.parts
                          .filter(part => part.type === 'tool-invocation')
                          .map((part, index) => (
                            <div 
                              key={index}
                              className="bg-[#2a2a2a] border border-[#404040] p-2 rounded-lg text-xs"
                            >
                              <div className="flex items-center space-x-2 text-[#636aff]">
                                <div className={`w-1.5 h-1.5 bg-[#636aff] rounded-full ${
                                  part.type === 'tool-invocation' && part.toolInvocation.state === 'result' ? '' : 'animate-pulse'
                                }`}></div>
                                <span>
                                  {part.type === 'tool-invocation' && part.toolInvocation.state === 'call' && 'Thinking...'}
                                  {part.type === 'tool-invocation' && part.toolInvocation.state === 'result' && `Used ${part.toolInvocation.toolName}`}
                                  {part.type === 'tool-invocation' && part.toolInvocation.state === 'partial-call' && `Using ${part.toolInvocation.toolName}...`}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}

                    {message.role === "user" ? (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    ) : (
                      <div 
                        className="text-sm leading-relaxed prose prose-invert prose-sm max-w-none prose-p:my-2 prose-headings:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0"
                        dangerouslySetInnerHTML={{
                          __html: marked(message.content, { 
                            breaks: true,
                            gfm: true 
                          })
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {status !== "ready" && (
              <div className="flex justify-start">
                <div className="bg-[#3a3a3a] border border-[#505050] p-3 sm:p-4 rounded-2xl max-w-[90%] sm:max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#636aff] rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-[#636aff] rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-[#636aff] rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400">
                      Silas is typing...
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 sm:p-6 bg-[#2a2a2a] border-t border-[#404040]">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <input
                value={input}
                onChange={handleInputChange}
                onFocus={() => setIsExpanded(true)}
                placeholder="Ask me anything..."
                className="w-full bg-[#3a3a3a] border border-[#505050] rounded-xl px-4 py-3 sm:py-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#636aff] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                disabled={status !== "ready"}
              />
              <button
                type="submit"
                disabled={status !== "ready" || !input.trim()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#636aff] hover:bg-[#545cef] disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 21L23 12L2 3V10L17 12L2 14V21Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
