import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Aboutme');

  
  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     
      <Header/>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}
      <Footer/>
    </div>
  );
}
