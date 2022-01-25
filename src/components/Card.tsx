import React from 'react';

type ParentType = {
  title: string;
  columns?: boolean;
};

export const Card: React.FC<ParentType> = ({
  title,
  columns = false,
  children,
}) => {
  return (
    <div className="box" style={{ flexDirection: columns ? 'row' : 'column' }}>
      <h3 style={{ marginRight: '20px', display: 'block' }}>{title}</h3>
      {children}
    </div>
  );
};
