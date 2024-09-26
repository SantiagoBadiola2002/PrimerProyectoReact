import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBarComponent/navbar'; // Importar el componente Navbar
import Saludo from './components/SaludoComponent/Saludo'; // Importar el componente Saludo

function App() {
  return (
    <Router>
      <div className="App">
        {/* Coloca el Navbar al principio */}
        <Navbar />
        {/* Rutas para los diferentes componentes */}
        <Routes>
          {/* Página principal (Home) */}
          <Route 
            path="/" 
            element={
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Primer Proyecto React
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            } 
          />
          
          {/* Ruta para la página de Hola Mundo */}
          <Route path="/hola-mundo" element={<Saludo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
