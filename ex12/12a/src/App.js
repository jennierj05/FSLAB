import React, { useState } from 'react';
import axios from "axios";

function App() {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState({ length: 0, vowels: 0, consonants: 0 });

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:8080/login", { User: user });

    setMessage({
      length: res.data.Length,
      vowels: res.data.Vowels,
      consonants: res.data.Consonants
    });
  }

  const handleUser = (event) => {
    setUser(event.target.value);
  }

  return (
    <div className="container">
      <h1 className="header">WORD ANALYSIS</h1>
      <label className="input-label">
        Name:
        <input type="text" className="input-field" value={user} onChange={handleUser} />
      </label>
      <div className="button-container">
        <button onClick={handleSubmit} className="button-style">Submit</button>
      </div>
      {message.length > 0 && (
        <div className="message">
          <p>Length: {message.length}</p>
          <p>Vowels: {message.vowels}</p>
          <p>Consonants: {message.consonants}</p>
        </div>
      )}
    </div>
  );
}

export default App;