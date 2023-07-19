import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
}

const Container = ({
  children,
  className = '',
  maxWidth = '6xl',
  padding = '',
  margin = '',
  backgroundColor = '',
  borderRadius = '',
  boxShadow = '',
}: ContainerProps): JSX.Element => {
  const containerClasses = ` ${padding} ${margin} ${
    backgroundColor ? `bg-${backgroundColor}` : ''
  } ${borderRadius} ${boxShadow} ${className}`;

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
//mx-auto px-5 max-w-${maxWidth}