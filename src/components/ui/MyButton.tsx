import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  darkColor?: string;
  lightColor?: string;
  theme?: 'light' | 'dark';
  className?: string;
  disabled?: boolean;
  showArrow?: boolean;
  fontSize?: string;
  fontWeight?: string;
}

const MyButton: React.FC<ButtonProps> = ({
  text = "Button",
  onClick,
  darkColor = "#e3f6f2", 
  lightColor = "#06AF7F",
  theme = "light",
  className = "",
  disabled = false,
  showArrow = true,
  fontSize = "text-base",
  fontWeight = "font-semibold"
}) => {
  const textColor = theme === 'dark' ? darkColor : lightColor;
  const arrowFill = theme === 'dark' ? darkColor : lightColor;
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 transition-opacity duration-200 ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
      } ${className}`}
    >
      <p 
        className={`${fontSize} leading-[120%] font-inter ${fontWeight}`}
        style={{ color: textColor }}
      >
        {text}
      </p>

      {showArrow && (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="17" 
          viewBox="0 0 16 17" 
          fill="none"
        >
          <path 
            d="M13.8538 8.68728L9.35375 13.1873C9.25993 13.2811 9.13268 13.3338 9 13.3338C8.86732 13.3338 8.74007 13.2811 8.64625 13.1873C8.55243 13.0935 8.49972 12.9662 8.49972 12.8335C8.49972 12.7008 8.55243 12.5736 8.64625 12.4798L12.2931 8.83353H2.5C2.36739 8.83353 2.24021 8.78085 2.14645 8.68708C2.05268 8.59332 2 8.46614 2 8.33353C2 8.20092 2.05268 8.07374 2.14645 7.97998C2.24021 7.88621 2.36739 7.83353 2.5 7.83353H12.2931L8.64625 4.18728C8.55243 4.09346 8.49972 3.96621 8.49972 3.83353C8.49972 3.70085 8.55243 3.5736 8.64625 3.47978C8.74007 3.38596 8.86732 3.33325 9 3.33325C9.13268 3.33325 9.25993 3.38596 9.35375 3.47978L13.8538 7.97978C13.9002 8.02622 13.9371 8.08136 13.9623 8.14206C13.9874 8.20276 14.0004 8.26782 14.0004 8.33353C14.0004 8.39924 13.9874 8.4643 13.9623 8.525C13.9371 8.5857 13.9002 8.64084 13.8538 8.68728Z"
            fill={arrowFill}
          />
        </svg>
      )}
    </button>
  );
};

export default MyButton;