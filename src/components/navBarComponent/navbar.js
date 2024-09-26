import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logoReact.png';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" /> {/* Imagen del logo */}
      </div>
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">
          <Link to="/hola-mundo">Hola Mundo</Link>
        </li>
        <li className="nav-link">Servicios</li>
        <li className="nav-link">Contactos</li>
      </ul>
    </nav>
  );
}
