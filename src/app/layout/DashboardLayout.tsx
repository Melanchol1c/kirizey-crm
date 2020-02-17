import React from 'react';

type DashboardLayoutType = {};

const DashboardLayout: React.FC<DashboardLayoutType> = ({ children }) => {
  return <div className="dashboard-layout">{children}</div>;
};

export default DashboardLayout;
