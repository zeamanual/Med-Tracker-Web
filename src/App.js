import { Box, Container } from '@mui/material';
import MainPage from './pages/Main-page';
import React from "react";
import { padding } from '@mui/system';
import { ImportantDevices} from '@mui/icons-material';
import Login from './pages/login';
// "#f8f8f8
function App() {
  return (
      // <Container sx={{backgroundColor:"red"}}>
      <Box minHeight={"100vh"}  paddingX={{xs:"1em",lg:"14em"}} bgcolor={{ xs:"#f8f8f8",md:"#daf2f8"}}>
        {/* <MainPage /> */}
        <Login/>
        
      </Box>
          
      // </Container>
  );
}

export default App;
