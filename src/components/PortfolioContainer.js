import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Aboutme from './pages/Aboutme/Aboutme';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'IanLi') {
      return <Aboutme />;
    }
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return (
      <Aboutme /> 
    )
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}