import React from 'react';
import { PageHeader } from 'antd';
import { useSelector } from 'react-redux';
import { userSelector } from '../auth/store/selectors';
import { User } from '../core/models/User';

type DashboardLayoutType = {};

const DashboardLayout: React.FC<DashboardLayoutType> = props => {
  const { children } = props;

  const user: User | null = useSelector(userSelector);
  const renderGreeting: string | null = user && `Welcome, ${user.firstName} ${user.lastName}`;

  return (
    <div className="dashboard-layout">
      <PageHeader style={styles.header} title="Harmony CRM" subTitle={renderGreeting} />
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
