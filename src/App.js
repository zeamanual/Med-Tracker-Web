import { Box, Container } from '@mui/material';
import MainPage from './pages/main-page';
import React from "react";
import { padding } from '@mui/system';
import { ImportantDevices } from '@mui/icons-material';
import Login from './pages/login';
import PageRouter from "./router/router";

function App() {
  return (
    <Box minHeight={"100vh"} paddingX={{ xs: "1em", lg: "14em" }} bgcolor={{ xs: "#f8f8f8", md: "#daf2f8" }}>
      <PageRouter />
    </Box>
  );
}

export default App;