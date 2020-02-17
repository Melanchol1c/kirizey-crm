import React from 'react';

type AuthLayoutType = {};

const AuthLayout: React.FC<AuthLayoutType> = ({ children }) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
