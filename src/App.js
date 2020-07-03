import React, { Component } from 'react';

import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { light } from "./shared/theme";

import AppNavBar from './parts/AppNavbar/AppNavbar'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={light}>
        <CssBaseline />
        <AppNavBar />
      </ThemeProvider>
    );
  }
}

export default App;
