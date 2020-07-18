import React, { Component } from 'react';

import { Helmet } from "react-helmet";
import { Router } from "@reach/router";

import { CssBaseline } from "@material-ui/core";

import { UserProvider } from './shared/contexts/userProvider';
import { AppThemeProvider } from './shared/contexts/themeContext';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Helmet>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Helmet>
        <AppThemeProvider>
          <UserProvider>
            <CssBaseline />
            <Router>
              <Main path="/" />
              <Login path="/login" />
              <Register path="/register" />
            </Router>
          </UserProvider>
        </AppThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
