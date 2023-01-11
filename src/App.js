import { Box, Container } from '@mui/material';
import MainPage from './pages/Main-page';
import React from "react";
import { padding } from '@mui/system';
import { ImportantDevices } from '@mui/icons-material';
// "#f7f7f7
function App() {
  return (
      <Container fixed sx={{backgroundColor:" #f8f8f8"}}>
          <MainPage />
      </Container>
  );
}

export default App;
