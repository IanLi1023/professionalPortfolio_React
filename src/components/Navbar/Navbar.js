import React from 'react';
import '../Navbar/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <header>
            <nav>
                <a href="#IanLi">Ian Li</a>
                <a href="#about"
                onClick={() => handlePageChange('Aboutme')}      
                className={currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'}>About Me</a>
                
                <a href="#work"
                onClick={() => handlePageChange('Work')}      
                className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                >My Work</a>
                
                <a href="#contact"
                onClick={() => handlePageChange('Contact')}      
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact Me</a>
            </nav>
        </header>
    );
}

export default Navbar;