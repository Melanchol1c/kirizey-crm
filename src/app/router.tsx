import React from 'react';
import { Switch, Route } from 'react-router-dom';

const AppRouter = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/faq" component={FAQPage} />
      </Switch>
    </>
  );
};

export default AppRouter;
