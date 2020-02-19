import React from 'react';

type AuthLayoutType = {};

const AuthLayout: React.FC<AuthLayoutType> = ({ children }) => {
  return (
    <div style={styles.container} className="auth-layout">
      {children}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};

export default AuthLayout;
