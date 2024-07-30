import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Quiz from './components/Quiz';
import CartPage from './components/CartPage';
import CoursesPage from './components/CoursesPage'; 
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer'; 
import Sidebar from './components/Admin/Sidebar';
import Dashboard from './components/Admin/Dashboard';
import Users from './components/Admin/Users';
import Settings from './components/Admin/Settings';
import './App.css'


function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<CoursesPage />} /> 
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<CartPage />} /> 
            <Route path="/admin" element={
              <div className="admin-panel">
                <Sidebar />
                <div className="content">
                  <Routes>
                    <Route path="" element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            } />
          </Routes>
        </div>
        <Footer /> 
      </Router>
    </CartProvider>
  );
}

export default App;
