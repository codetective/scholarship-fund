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
  maxWidth = '8xl',
  padding = '',
  margin = '',
  backgroundColor = '',
  borderRadius = '',
  boxShadow = '',
}: ContainerProps): JSX.Element => {
  const containerClasses = ` ${padding} ${margin} ${
    backgroundColor ? `bg-${backgroundColor}` : ''
  } ${borderRadius} ${boxShadow} ${className} mx-auto px-5 max-w-${maxWidth}`;

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
//mx-auto px-5 max-w-${maxWidth}
