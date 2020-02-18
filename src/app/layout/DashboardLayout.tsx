import React from 'react';
import { PageHeader } from 'antd';

type DashboardLayoutType = {};

const DashboardLayout: React.FC<DashboardLayoutType> = props => {
  const { children } = props;

  return (
    <div className="dashboard-layout">
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        title="Kirizey CRM"
        subTitle="This is a subtitle"
      />
      {children}
    </div>
  );
};

export default DashboardLayout;
