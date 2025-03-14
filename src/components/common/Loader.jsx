// src/components/common/Loader.jsx
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="custom-loader"></div>
    </div>
  );
};

export default Loader;