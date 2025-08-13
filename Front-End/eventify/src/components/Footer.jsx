import { Link } from "react-router-dom";
import '../App.css';

import logomain from '../Images/pm.jpg';  // rename import to logomain to match usage

function Footer() {
  return (
    <footer className="text-white pt-4 pb-2 mt-5" style={{ backgroundColor: "#34a3da" }}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-4 mb-3 d-flex flex-column align-items-start justify-content-start">
            <Link
              to="/"
              className="d-flex align-items-center text-decoration-none"
              style={{
                gap: '10px',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontWeight: '700',
                fontSize: '1.5rem',
                color: '#2B5DAE', // fallback color
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'unset')}
              onMouseLeave={e => (e.currentTarget.style.color = '#2B5DAE')}
            >
              <img
                src={logomain}
                alt="Logo"
                style={{ height: '40px', maxHeight: '10vh' }}
              />
              <span
                style={{
                 background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  MozBackgroundClip: 'text',
                  MozTextFillColor: 'transparent',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                Task Master
              </span>
            </Link>

            <p className="mb-0 mt-2">Turning moments into memories.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/aboutus" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/events" className="text-white text-decoration-none">Tasks</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: TaskManager@gmail.com</p>
            <p>Phone: +91 9878635678</p>
          </div>
        </div>

        <div className="text-center mt-3 border-top pt-3" style={{ fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Task Manager. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
