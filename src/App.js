import React, { Component } from 'react';

import { Helmet } from "react-helmet";

import { CssBaseline } from "@material-ui/core";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import AppNavBar from './parts/AppNavbar/AppNavbar'
import AppSideBar from './parts/AppNavbar/AppSideBar/AppSideBar'
import NotesArea from './parts/NotesArea/NotesArea'

import { UserProvider } from './shared/contexts/userProvider'
import { AppThemeProvider } from './shared/contexts/themeContext'
import { ListViewProvider } from './shared/contexts/listViewProvider'
import { MenuBarProvider } from './shared/contexts/menuBarProvider'
import { LabelsProvider, TodosProvider, SelectedLabelProvider } from './shared/contexts/todosProvider'

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
          <ListViewProvider>
            <MenuBarProvider>
              <LabelsProvider>
                <TodosProvider>
                  <SelectedLabelProvider>
                    <CssBaseline />
                    <UserProvider>
                      <AppNavBar />
                      <AppSideBar />
                      <Container maxWidth={false}>
                        <Box mt={8}>
                          <NotesArea />
                        </Box>
                      </Container>
                    </UserProvider>
                  </SelectedLabelProvider>
                </TodosProvider>
              </LabelsProvider>
            </MenuBarProvider>
          </ListViewProvider>
        </AppThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
