import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs" style={{fontSize: '30px', fontWeight: 'bold', textAlign: 'center', justifyContent: 'space-evenly'}}>
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            style={{color: 'black'}}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#me"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            style={{color: 'black'}}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
            style={{color: 'black'}}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            style={{color: 'black'}}
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            style={{color: 'black'}}
          >
            Resume
          </a>
        </li>
      </ul>
    );
  }
  

export default NavBar;