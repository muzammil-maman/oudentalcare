import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wider uppercase";
  
  const variants = {
    primary: "bg-brand-maroon text-white hover:bg-brand-dark shadow-lg hover:shadow-brand-maroon/30",
    secondary: "bg-brand-gold text-white hover:bg-yellow-600 shadow-md",
    outline: "border-2 border-brand-maroon text-brand-maroon hover:bg-brand-maroon hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;