import React from 'react';
import Helmet from 'react-helmet';

type DashboardPageType = {};

const DashboardPage: React.FC<DashboardPageType> = () => {
  return (
    <>
      <Helmet>
        <title>Harmony CRM | Main Page</title>
      </Helmet>
      <div>dashboard</div>
    </>
  );
};

export default DashboardPage;
