import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './coffee/home';
import About from './coffee/about';
import Service from './coffee/service';
import Contact from './coffee/contact';
import Offcanvas from 'react-bootstrap/Offcanvas'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <BrowserRouter>
      <div>
        <nav>
          <div className="logo">
            <Link className="log" to="/" onClick={handleClose}>Logo</Link>
          </div>

          {/* Hamburger Menu Toggle Button */}
          <button className="toggle-button" onClick={handleShow}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li><Link to="/" onClick={handleClose}>Home</Link></li>
            <li><Link to="/about" onClick={handleClose}>About</Link></li>
            <li><Link to="/service" onClick={handleClose}>Service</Link></li>
            <li><Link to="/contact" onClick={handleClose}>Contact</Link></li>
          </ul>
        </nav>
      {/* Offcanvas menu for Mobile */}
        <Offcanvas show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Logo</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul style={{textDecoration: 'none',listStyle:'none'}}>
              <li><Link to="/" onClick={handleClose}>Home</Link></li>
              <li><Link to="/about" onClick={handleClose}>About</Link></li>
              <li><Link to="/service" onClick={handleClose}>Service</Link></li>
              <li><Link to="/contact" onClick={handleClose}>Contact</Link></li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about/:id" element={<Detailpag />} /> */}
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
    <footer className="footer">
  <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
</footer>
    </>
  );
}

root.render(<App />);
reportWebVitals();
