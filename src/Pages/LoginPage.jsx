  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './login.css';


  function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginClick = (e) => {
      e.preventDefault();

      const validUsers = [
        { email: "vel", password: "1" },
        { email: "vel@jothi.com", password: "love" },
        { email: "admin@test.com", password: "admin123" }
      ];

      if (!email || !password) {
        alert("Please enter email and password.");
        return;
      }

      const matchedUser = validUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        alert(`✅ Login successful!\nWelcome, ${matchedUser.email}`);
        navigate("/employee"); // Redirect on success 
        
      } else {
        alert("❌ Invalid email or password.");
      }
    };

    return (
      <div className="background-wrapper">
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Mail ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="button" onClick={handleLoginClick}>Log In</button>
          </form>
        </div>
      </div>
    );
  }

  export default LoginPage;
