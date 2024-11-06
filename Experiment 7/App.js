import React, { useState, useEffect } from 'react';
import './App.css';  // Import the CSS file

const App = () => {
  // States for handling form input and submitted data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // useEffect hook to log when the component mounts
  useEffect(() => {
    console.log('App component mounted.');
  }, []);

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents page reload on form submission
    setSubmittedData({ name, email });
    setName('');  // Reset input fields
    setEmail('');
  };

  // Inline styles example
  const inlineStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '20px',
    },
    input: {
      padding: '8px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    greetingButton: {
      marginTop: '20px',
    },
  };

  return (
    <div style={inlineStyles.container}>
      <h1>React Form with Hooks</h1>

      {/* Form Section */}
      <form style={inlineStyles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inlineStyles.input}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inlineStyles.input}
        />
        <button type="submit" style={inlineStyles.button}>Submit</button>
      </form>

      {/* Show submitted data if available */}
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}

      {/* Handling Events - Greeting button */}
      <button
        onClick={() => alert(`Hello, ${name || 'Guest'}!`)}
        style={{ ...inlineStyles.button, ...inlineStyles.greetingButton }}
      >
        Greet Me
      </button>
    </div>
  );
};

export default App;
