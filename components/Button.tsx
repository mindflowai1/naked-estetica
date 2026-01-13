import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'glass';
  icon?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-500 ease-out font-sans font-medium tracking-wide text-sm uppercase px-8 py-4 rounded-full";
  
  const variants = {
    primary: "bg-cocoa text-white hover:bg-charcoal hover:shadow-lg hover:shadow-nude/20 hover:-translate-y-0.5",
    outline: "border border-cocoa text-cocoa hover:bg-cocoa hover:text-white hover:-translate-y-0.5",
    ghost: "text-cocoa hover:text-nude p-0 bg-transparent",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-cocoa hover:bg-white/30"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;