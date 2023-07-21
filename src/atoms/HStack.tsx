import React, { CSSProperties, FC, HTMLAttributes } from 'react';

interface HStackProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: string;
  justify?: CSSProperties['justifyContent'];
}

const HStack: FC<HStackProps> = ({
  spacing = '1',
  className,
  children,
  justify,
  ...rest
}) => {
  return (
    <div
      style={{
        justifyContent: justify,
      }}
      className={`flex items-center flex-row gap-${Number(
        spacing
      )} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default HStack;
