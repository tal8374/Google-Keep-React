import React, { Component } from 'react';

import { CssBaseline } from "@material-ui/core";

import AppNavBar from './parts/AppNavbar/AppNavbar'
import { UserProvider } from './shared/contexts/userProvider'
import { AppThemeProvider } from './shared/contexts/themeContext'
import { ListViewProvider } from './shared/contexts/listViewProvider'
import { MenuBarProvider } from './shared/contexts/menuBarProvider'
import { LabelsProvider, TodosProvider, SelectedLabelProvider } from './shared/contexts/todosProvider'

class App extends Component {
  render() {
    return (
      <AppThemeProvider>
        <ListViewProvider>
          <MenuBarProvider>
            <LabelsProvider>
              <TodosProvider>
                <SelectedLabelProvider>
                  <CssBaseline />
                  <UserProvider>
                    <AppNavBar />
                  </UserProvider>
                </SelectedLabelProvider>
              </TodosProvider>
            </LabelsProvider>
          </MenuBarProvider>
        </ListViewProvider>
      </AppThemeProvider>
    );
  }
}

export default App;
