import React, { Component } from 'react';

import { CssBaseline } from "@material-ui/core";

import AppNavBar from './parts/AppNavbar/AppNavbar'
import { UserProvider } from './shared/contexts/userProvider'
import { AppThemeProvider } from './shared/contexts/themeContext'
import { ListViewProvider } from './shared/contexts/listViewProvider'

class App extends Component {
  render() {
    return (
      <AppThemeProvider>
        <ListViewProvider>
          <CssBaseline />
          <UserProvider>
            <AppNavBar />
          </UserProvider>
        </ListViewProvider>
      </AppThemeProvider>
    );
  }
}

export default App;
