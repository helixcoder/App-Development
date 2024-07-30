import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './form.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'rock') {
      navigate('/admin');
    } else {
    axios.get(`http://localhost:8001/user?email=${email}&password=${password}`)
      .then(res => {
        if (res.data.length > 0) {
          alert('Logged in successfully');
            navigate('/');
          }
        else {
          alert('Invalid username and password');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }};

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup" className="signup-link">
        Haven't signed up? Click here to signup
      </Link>
    </div>
  );
}

export default Login;
