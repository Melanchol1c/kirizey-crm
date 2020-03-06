import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { RouteConfigType } from './core/models/RouteConfigType';
import { SIGN_IN_PATH } from './core/constants/routePaths';
import auth from './auth/routes';
import company from './client/company/routes';
import dashboard from './client/dashboard/routes';
import profile from './client/profile/routes';
import NotFoundPage from './pages/NotFoundPage';
import { createRouteConfig } from './core/libs';

const notFoundRoute = createRouteConfig('**', NotFoundPage);

const appRoutes: RouteConfigType[] = [...dashboard, ...auth, ...company, ...profile, notFoundRoute];

const AppRouter = (): JSX.Element => {
  const location = useLocation();
  const user = true;

  const renderAppRoutes: JSX.Element[] = appRoutes.map((route, index) => {
    const {
      path,
      component,
      meta: { layout, auth },
      exact,
    } = route;
    const Component = component;

    if (auth && !user) {
      return <Redirect key={index} to={SIGN_IN_PATH} />;
    }

    if (layout) {
      const Layout = layout;

      return (
        <Route
          exact={exact}
          key={index}
          path={path}
          render={(props): JSX.Element => (
            <Layout key={index}>
              <Component {...props} />
            </Layout>
          )}
        />
      );
    }

    return <Route exact={exact} key={index} path={path} component={component} />;
  });

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={{ enter: 100, exit: 100 }} classNames="fade">
        <Switch>{renderAppRoutes}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
