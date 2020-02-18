import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';

import './style.css';

import { userLoadingSelector } from '../../auth/store/selectors';
import { loadUserProfile } from '../../auth/store/actions';

type AppLoaderType = {};

const AppLoader: React.FC<AppLoaderType> = ({ children }) => {
  const loading = useSelector(userLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserProfile);
  }, [dispatch]);

  const renderApplication = loading ? (
    <div className="app-loader">
      <Spin size="large" />
    </div>
  ) : (
    children
  );

  return <>{renderApplication}</>;
};

export default AppLoader;
