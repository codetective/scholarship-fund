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

const ContainerWrap = ({
  children,
  className = '',
  padding = '',
  margin = '',
  backgroundColor = '',
  borderRadius = '',
  boxShadow = '',
}: ContainerProps): JSX.Element => {
  const containerClasses = ` ${padding} ${margin} ${
    backgroundColor ? `bg-${backgroundColor}` : ''
  } ${borderRadius} ${boxShadow} ${className} h-full mx-auto px-6 max-w-[1320px]`;

  return <div className={containerClasses}>{children}</div>;
};

export default ContainerWrap;
//mx-auto px-5 max-w-${maxWidth}
