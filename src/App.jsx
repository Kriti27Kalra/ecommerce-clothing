import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './components/Products';

import ProductInventory from './dashboard/ProductInventory';
import Wishlist from './dashboard/Wishlist';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Add Dashboard Routes */}
        
            <Route path="/dashboard/productinventory" element={<ProductInventory />} />
            <Route path="/dashboard/wishlist" element={<Wishlist />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
