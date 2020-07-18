import React, { Component } from 'react';

import { Helmet } from "react-helmet";
import { Router } from "@reach/router";

import { CssBaseline } from "@material-ui/core";

import { UserProvider } from './shared/contexts/userProvider';
import { AppThemeProvider } from './shared/contexts/themeContext';

import Main from './pages/main';

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
        {/* <Router> */}
        <AppThemeProvider>
          <UserProvider>
            <CssBaseline />

            <Main />
          </UserProvider>
        </AppThemeProvider>
        {/* </Router> */}
      </React.Fragment>
    );
  }
}

export default App;
