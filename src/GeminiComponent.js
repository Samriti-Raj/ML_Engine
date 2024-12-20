import React, { useState } from 'react';
import axios from 'axios';

const GeminiComponent = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('/api/gemini', { input });
      setResponse(result.data);
    } catch (error) {
      console.error('Error communicating with Gemini API', error);
    }
  };

  return (
    <div>
      <h1>Interact with Gemini</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your input"
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default GeminiComponent;
