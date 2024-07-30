import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import Chatbot from './Chatbot';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link to="/">ECA</Link></div>
      <ul className="navbar-links">
        <li><Link to="/course">Course</Link></li>
        <li><Link to="/quiz">Online Quiz</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cart"><ShoppingCartOutlinedIcon/>{cart.length}</Link></li>
        <li onClick={toggleChat} style={{ cursor: 'pointer' }}><ChatIcon/></li>
      </ul>
      {isChatOpen && (
        <div className="chat-modal">
          <div className="chat-modal-content">
            <span className="close-chat" onClick={toggleChat}>&times;</span>
            <Chatbot />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
