import React, { Component } from 'react';

import { CssBaseline } from "@material-ui/core";

import AppNavBar from './parts/AppNavbar/AppNavbar'
import { UserProvider } from './shared/contexts/userProvider'
import { AppThemeProvider } from './shared/contexts/themeContext'


class App extends Component {
  render() {
    return (
      <AppThemeProvider>
        <CssBaseline />
        <UserProvider>
          <AppNavBar />
        </UserProvider>
      </AppThemeProvider>
    );
  }
}

export default App;
