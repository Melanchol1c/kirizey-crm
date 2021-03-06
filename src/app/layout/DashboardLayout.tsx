import React from 'react';
import { PageHeader, Button, Typography, Icon, Popconfirm, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { userSelector } from '../auth/store/selectors';
import { User } from '../core/models/User';
import { PROFILE_PATH, INDEX_PATH, SIGN_IN_PATH } from '../core/constants/routePaths';
import { Link, useHistory } from 'react-router-dom';
import { resetUser } from '../auth/store/actions';

type DashboardLayoutType = {};

const DashboardLayout: React.FC<DashboardLayoutType> = props => {
  const { children } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const user: User | null = useSelector(userSelector);
  const renderGreeting: string | null = user && `${user.firstName} ${user.lastName}`;
  const logoutConfirmMessage = 'Are you sure to logout?';

  const handleLogout = (): void => {
    dispatch(resetUser());
    message.warning('You logged out');
    history.push(SIGN_IN_PATH);
  };

  return (
    <div style={styles.layout} className="dashboard-layout">
      <PageHeader
        style={styles.header}
        title={
          <Link className="text" to={INDEX_PATH}>
            <Typography.Text>Harmony CRM</Typography.Text>
          </Link>
        }
        subTitle={renderGreeting}
        extra={[
          <Icon key="notifications" type="bell" style={styles.notifications.icon} />,
          <Button key="profile" type="link">
            <Link to={PROFILE_PATH}>Profile</Link>
          </Button>,
          <Popconfirm
            key="logout"
            placement="bottomRight"
            title={logoutConfirmMessage}
            onConfirm={handleLogout}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" icon="logout">
              Logout
            </Button>
          </Popconfirm>,
        ]}
      />
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  layout: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  header: {
    border: '1px solid rgb(235, 237, 240)',
  },
  content: {
    padding: 10,
  },
  notifications: {
    icon: {
      fontSize: 20,
    },
  },
};

export default DashboardLayout;
