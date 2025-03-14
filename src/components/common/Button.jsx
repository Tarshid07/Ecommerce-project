// src/components/common/Button.jsx
import React from "react";
import "./Button.css"; // Import the CSS file

const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  fullWidth = false,
  disabled = false,
  className = "" 
}) => {
  const widthClass = fullWidth ? "btn-full-width" : "";
  const disabledClass = disabled ? "btn-disabled" : "";
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant} ${widthClass} ${disabledClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
