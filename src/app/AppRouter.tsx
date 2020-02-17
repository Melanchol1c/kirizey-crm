import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConfigType } from './core/models/RouteConfigType';
import { SIGN_IN_PATH } from './core/constants/routePaths';
import auth from './auth/routes';
import company from './client/company/routes';
import dashboard from './client/dashboard/routes';

const appRoutes: RouteConfigType[] = [...auth, ...company, ...dashboard];

const AppRouter = (): JSX.Element => {
  const user = true;

  const renderAppRoutes: JSX.Element[] = appRoutes.map((route, index) => {
    const {
      path,
      component,
      meta: { layout, auth },
    } = route;
    const renderRoute: JSX.Element = <Route key={index} path={path} component={component} />;

    if (auth && !user) {
      return <Redirect key={index} to={SIGN_IN_PATH} />;
    }

    if (layout) {
      const Layout = layout;

      return <Layout key={index}>{renderRoute}</Layout>;
    }

    return renderRoute;
  });

  return (
    <>
      <Switch>{renderAppRoutes}</Switch>
    </>
  );
};

export default AppRouter;
