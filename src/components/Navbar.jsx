import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand text-white" to="/">MyStore</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/register">Register</Link>
          </li>
          
          {/* Add Dashboard links */}
      
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard/productinventory">Admin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard/wishlist">Wishlist</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
