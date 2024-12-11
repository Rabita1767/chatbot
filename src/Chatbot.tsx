import { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleSend = () => {
    if (input) {
      setMessages([...messages, `You: ${input}`]);

      // Simulating a basic bot response
      setMessages(prevMessages => [
        ...prevMessages, 
        `Bot: You said "${input}"`  // Simple bot reply
      ]);
      setInput('');  // Reset input field after sending
    }
  };

  return (
    <div>
      {/* Chatbot Icon */}
      {!showChatbot && (
        <div className="chatbot-icon" onClick={toggleChatbot}>
          🗨️
        </div>
      )}

      {/* Overlay Background */}
      {showChatbot && <div className="overlay" onClick={toggleChatbot}></div>}

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="chatbox">
          <div className="chatWindow">
            {messages.map((msg, index) => (
              <div key={index} className="message">{msg}</div>
            ))}
          </div>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className="input" 
            placeholder="Type a message..." 
          />
          <button onClick={handleSend} className="sendButton">Send</button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
