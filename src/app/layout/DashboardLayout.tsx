import React from 'react';
import { PageHeader } from 'antd';

type DashboardLayoutType = {};

const DashboardLayout: React.FC<DashboardLayoutType> = props => {
  const { children } = props;

  return (
    <div className="dashboard-layout">
      <PageHeader style={styles.header} title="Harmony CRM" subTitle="This is a subtitle" />
      {children}
    </div>
  );
};

const styles = {
  header: {
    border: '1px solid rgb(235, 237, 240)',
  },
};

export default DashboardLayout;
