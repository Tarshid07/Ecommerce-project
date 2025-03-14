import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './Mainlayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-light-gray"> 
      <Header />
      <main className="content-container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
