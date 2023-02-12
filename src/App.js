import { Box, Container } from '@mui/material';
import MainPage from './pages/main-page';
import React from "react";
import { padding } from '@mui/system';
import { ImportantDevices} from '@mui/icons-material';
import Login from './pages/login';
import PageRouter from "./router/router";
// "#f8f8f8
function App() {
  return (
      // <Container sx={{backgroundColor:"red"}}>
      
        <PageRouter/>
          
      // </Container>
  );
}

export default App;