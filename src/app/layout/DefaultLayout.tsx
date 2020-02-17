import React from 'react';

type DefaultLayoutType = {};

const DefaultLayout: React.FC<DefaultLayoutType> = ({ children }) => {
  return <div className="default-layout">{children}</div>;
};

export default DefaultLayout;
