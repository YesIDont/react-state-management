import React from 'react';

type ButtonProps = {
  onClick(): void;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} className={`button ${className}`} type="button">
      {children}
    </button>
  );
};
