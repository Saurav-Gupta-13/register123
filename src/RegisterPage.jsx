import React, { useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { Register } from './models';

function RegisterPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Do something with the form data, such as submitting it to a server
    try {
        await DataStore.save(
          new Register({
            "name": name,
            "age": age
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
