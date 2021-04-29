import React from 'react';
// Main Style
import "./assets/scss/main.scss";
// Router
import { BrowserRouter, Switch } from "react-router-dom";
// Routes
import PublicRoute from './components/auth/PublicRoute';
// Layout
import PublicLayout from './layout/PublicLayout';

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Public Route */}
          <PublicRoute path="*" component={PublicLayout} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
