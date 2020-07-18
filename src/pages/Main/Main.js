import React from 'react';

import { ListViewProvider } from '../../shared/contexts/listViewProvider';
import { MenuBarProvider } from '../../shared/contexts/menuBarProvider';
import { LabelsProvider, TodosProvider, SelectedLabelProvider, NoteInEditModeProvider } from '../../shared/contexts/todosProvider';

import AppNavBar from '../../parts/AppNavbar/AppNavbar';
import AppSideBar from '../../parts/AppNavbar/AppSideBar/AppSideBar';
import NotesArea from '../../parts/NotesArea/NotesArea';

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const Main = () => {

    return (
        <ListViewProvider>
        <MenuBarProvider>
          <LabelsProvider>
            <TodosProvider>
              <SelectedLabelProvider>
                <NoteInEditModeProvider>
                  <AppNavBar />
                  <AppSideBar />
                  <Container maxWidth={false}>
                    <Box mt={8}>
                      <NotesArea />
                    </Box>
                  </Container>
                </NoteInEditModeProvider>
              </SelectedLabelProvider>
            </TodosProvider>
          </LabelsProvider>
        </MenuBarProvider>
      </ListViewProvider>
    );

}

export default Main;
