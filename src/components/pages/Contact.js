import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [vName, setVName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'vName') {
      setVName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }

    // Check to see if the item text is empty
    if (!message.text) {
      setErrorMessage("message is required");
      return;
    }

  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Thanks for reaching out`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setVName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');    
  };

  return (
    <div id="About-Me" className="About-Me">
      <h2>Contact</h2>
      <form className="mx-auto form-group form w-50 p-3">
        <label className="form-label">vName</label>
        <input className="form-control mb-4"
          value={vName}
          name="vName"
          onChange={handleInputChange}
          type="text"
          placeholder="vName"
        />
        <label className="form-label">email</label>
        <input className="form-control mb-4"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <label className="form-label">message</label>
        <textarea className="form-control mb-4"
          required
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
          rows="7"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      {errorMessage && (
        <div>
          <p className="error-text position-absolute bottom-0 end-0">{errorMessage}</p>
        </div>
      )}
    </form>
    </div>
  );
}

export default Form;
