import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigator=useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogout = () => {
    // Optionally clear any auth info here
    alert('✅ Logged out successfully!');
    setIsLoggedIn(false);
    navigator('/'); // Redirect to login page

  };
  return (
    <header>
      <nav className='navbar navbar-dark bg-primary'>
        <div className="container">
          <a className='navbar-brand' href="#">Employee Management System</a>
          {isLoggedIn && (
            <button onClick={handleLogout}>LogOut</button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
