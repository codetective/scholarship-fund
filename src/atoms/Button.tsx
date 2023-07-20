import React, { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({
  variant,
  size = 'medium',
  disabled = false,
  onClick,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const baseStyles = `transition ease inline-flex items-center justify-center rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const sizeStyles = {
    small: `px-2 py-1 text-sm`,
    medium: `px-4 py-2`,
    large: `px-8 py-3 text-lg`,
  };

  const variantStyles = {
    primary: `bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500`,
    secondary: `bg-gray-300 text-gray-900 hover:bg-gray-400 focus:ring-gray-300`,
    danger: `bg-red-500 text-white hover:bg-red-600 focus:ring-red-500`,
    outline: `border border-gray-200 text-gray-200 hover:text-gray-900 hover:bg-gray-50 focus:ring-gray-500`,
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:bg-opacity-90';

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${
        variant ? variantStyles[variant] : ''
      } ${disabledStyles} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
