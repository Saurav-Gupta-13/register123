import React, { useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Register } from './models';

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Do something with the form data, such as submitting it to a server
    try {
        await DataStore.save(
          new Register({
            "firstName": firstName,
            "lastName": lastName
          })
        );
        console.log("Registration successful!");
      } catch (error) {
        console.error("Error saving registration data:", error);
      }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
