import React, { useState } from "react";
import './App.css'

const Toggle = () => {
  const [change, setChange] = useState(false);

  const toggleView = () => {
    setChange(!change);
  };

  const LoginPage = () => {
    return (
      <div className="login-container">
        <h2>Login Page</h2>
        <label>Email</label>
        <input></input>
        <label>Password</label>
        <input></input>
        <br></br>
        <button>Login</button>
        <br></br><br></br>
        <button onClick={toggleView}>Go to Signup</button>
      </div>
    );
  };

  const RegisterPage = () => {
    return (
      <div className="login-container">
        
        
        <form>
        <h2>Signup Page</h2>
        <label>Name</label>
        <input></input><br/>
        <label>Email</label>
        <input></input><br/>
        <label>Password</label>
        <input></input><br/>
        <label>Confrim Password</label>
        <input></input>
        <button onClick={toggleView}>Go to Login</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {change ? <RegisterPage /> : <LoginPage />}
    </div>
  );
};

export default Toggle;