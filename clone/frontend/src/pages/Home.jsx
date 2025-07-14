import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Welcome to ChatAI 🤖</h1>
        <p>Your personal AI assistant is ready to help!</p>
        <div className="button-group">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/chat')}>Chat with AI</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
