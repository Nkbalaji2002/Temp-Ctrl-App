import React, { useState } from "react";
import "./styles/RegisterForm.css";

export const RegisterForm: React.FC = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isRegistered, setisRegistered] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Form Data : `, formData);

    setisRegistered(true);
  };

  const handleReset = () => {
    setisRegistered(false);
    setformData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        {isRegistered ? (
          <>
            <p className="success-msg">Registration successful! Thank You.</p>
            <button className="reset" onClick={handleReset}>
              Back to Register
            </button>
          </>
        ) : (
          <>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">UserName :</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your Name"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email :</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="password">Password :</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button type="submit">Register</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};
