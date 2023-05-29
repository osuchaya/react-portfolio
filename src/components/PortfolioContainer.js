import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Aboutme';
import About from './pages/Portfolio';
import Blog from './pages/Resume';
import Contact from './pages/Contact';
//import Header and Footer 

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  //Conditional rendering: checks value of current page and return the appropriate component to return the React Component that renders the appropriate page
  const renderPage = () => {
    if (currentPage === 'About me') {
      return <Home />;
    }
    if (currentPage === '') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props 
      Giving state variable = currentPage and setter to change that variable = handlePageChange
      */}
      <Header/>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line 
      run renderPage function, checks current value of the page and return appropriate component*/}
      {renderPage()}
      <Footer/>
    </div>
  );
}
