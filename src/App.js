import { Box, Container } from '@mui/material';
import MainPage from './pages/Main-page';
import React from "react";
import { padding } from '@mui/system';
import { ImportantDevices } from '@mui/icons-material';

function App() {
  return (
      <Box disableGutters sx={{backgroundColor:"#f7f7f7"}} >
          <MainPage />
      </Box>
  );
}

export default App;
