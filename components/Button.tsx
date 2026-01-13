
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
  const baseStyles = "inline-flex items-center justify-center transition-all duration-500 ease-out font-sans font-black tracking-[0.2em] text-[11px] uppercase px-10 py-5 rounded-sm";
  
  const variants = {
    primary: "bg-nude text-cream hover:bg-nude-light hover:shadow-2xl hover:shadow-nude/10 hover:-translate-y-1",
    outline: "border border-nude text-nude hover:bg-nude hover:text-cream hover:-translate-y-1",
    ghost: "text-cocoa hover:text-nude p-0 bg-transparent",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
      )}
    </button>
  );
};

export default Button;
