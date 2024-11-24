import React, { useState, useEffect } from 'react';  
import './App.css'; // Import the CSS file  

const App = () => {  
  // States for handling form input and submitted data  
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');  
  const [dob, setDob] = useState(''); // State for Date of Birth  
  const [phone, setPhone] = useState(''); // State for Phone Number  
  const [gender, setGender] = useState(''); // State for Gender  
  const [address, setAddress] = useState(''); // State for Address  
  const [submittedData, setSubmittedData] = useState(null);  

  // useEffect hook to log when the component mounts  
  useEffect(() => {  
    console.log('App component mounted.');  
  }, []);  

  // Event handler for form submission  
  const handleSubmit = (e) => {  
    e.preventDefault(); // Prevents page reload on form submission  

    // Save the submitted data to state  
    setSubmittedData({  
      name,  
      email,  
      dob,  
      phone,  
      gender,  
      address,  
    });  

    // Reset input fields after submission  
    setName('');  
    setEmail('');  
    setDob('');  
    setPhone('');  
    setGender('');  
    setAddress('');  
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
    select: {  
      padding: '8px',  
      fontSize: '16px',  
      borderRadius: '4px',  
      border: '1px solid #ccc',  
    },  
    textarea: {  
      padding: '8px',  
      fontSize: '16px',  
      borderRadius: '4px',  
      border: '1px solid #ccc',  
      resize: 'none',  
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
      <h1>React Form with Additional Fields</h1>  

      {/* Form Section */}  
      <form style={inlineStyles.form} onSubmit={handleSubmit}>  
        {/* Name Field */}  
        <input  
          type="text"  
          placeholder="Enter your name"  
          value={name}  
          onChange={(e) => setName(e.target.value)}  
          style={inlineStyles.input}  
          required  
        />  

        {/* Email Field */}  
        <input  
          type="email"  
          placeholder="Enter your email"  
          value={email}  
          onChange={(e) => setEmail(e.target.value)}  
          style={inlineStyles.input}  
          required  
        />  

        {/* Date of Birth Field */}  
        <input  
          type="date"  
          placeholder="Enter your date of birth"  
          value={dob}  
          onChange={(e) => setDob(e.target.value)}  
          style={inlineStyles.input}  
          required  
        />  

        {/* Phone Number Field */}  
        <input  
          type="tel"  
          placeholder="Enter your phone number"  
          value={phone}  
          onChange={(e) => setPhone(e.target.value)}  
          style={inlineStyles.input}  
          pattern="[0-9]{10}" // Ensure a valid 10-digit phone number format  
          required  
        />  

        {/* Gender Field */}  
        <select  
          value={gender}  
          onChange={(e) => setGender(e.target.value)}  
          style={inlineStyles.select}  
          required  
        >  
          <option value="" disabled>  
            Select your gender  
          </option>  
          <option value="Male">Male</option>  
          <option value="Female">Female</option>  
          <option value="Other">Other</option>  
        </select>  

        {/* Address Field */}  
        <textarea  
          placeholder="Enter your address"  
          value={address}  
          onChange={(e) => setAddress(e.target.value)}  
          style={inlineStyles.textarea}  
          rows="3"  
          required  
        ></textarea>  

        {/* Submit Button */}  
        <button type="submit" style={inlineStyles.button}>Submit</button>  
      </form>  

      {/* Show submitted data if available */}  
      {submittedData && (  
        <div className="submitted-data">  
          <h3>Submitted Data:</h3>  
          <p><strong>Name:</strong> {submittedData.name}</p>  
          <p><strong>Email:</strong> {submittedData.email}</p>  
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>  
          <p><strong>Phone Number:</strong> {submittedData.phone}</p>  
          <p><strong>Gender:</strong> {submittedData.gender}</p>  
          <p><strong>Address:</strong> {submittedData.address}</p>  
        </div>  
      )}  

      {/* Greeting Button */}  
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
