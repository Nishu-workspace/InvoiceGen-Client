import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUikit } from "react-icons/fa";

const AiChatOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const startConversation = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/ask-ai", {
        prompt: chat,
        userInput: "hello", // This sends no user input → backend uses default system prompt
      });

      setChat([{ role: "model", parts: [{ text: response.data.data }] }]);
    } catch (error) {
      console.log(error);
      setChat([
        {
          role: "model",
          parts: [
            { text: "Failed to start AI assistant. Please try again later." },
          ],
        },
      ]);
    }
    setLoading(false);
  };
  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newChat = [...chat, { role: "user", parts: [{ text: userInput }] }];
    setChat(newChat);

    setUserInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/ask-ai", {
        prompt: chat,
        userInput: userInput,
      });
      console.log(response.data.data);
      setChat([
        ...newChat,
        { role: "model", parts: [{ text: response.data.data }] },
      ]);
    } catch (error) {
      setChat([
        ...newChat,
        {
          role: "model",
          parts: [{ text: "Oops! Something went wrong. Please try again." }],
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full shadow-lg z-50"
        onClick={() => {
          setIsOpen(true);
          if (chat.length === 0) {
            startConversation(); // Send initial default prompt to backend
          }
        }}
      >
        💬 Ask AI Help
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md h-[80vh] rounded-lg shadow-lg flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-indigo-700">
                AI Invoice Assistant
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500 text-xl"
              >
                ×
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
              {chat.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {console.log(msg)}
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${
                      msg.role === "user"
                        ? "bg-indigo-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.parts[0].text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="text-sm text-gray-400">AI is typing...</div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 p-2 rounded-md border border-gray-300"
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiChatOverlay;
