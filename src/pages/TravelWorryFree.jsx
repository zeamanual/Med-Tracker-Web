import React from "react";
import { Typography, CssBaseline, Grid, Container } from "@mui/material";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";

const WorryFree = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <ImageList
              styles={{ height: "1%", width: "2" }}
              align="center"
              padding="20px"
            >
              <img
                src="https://www.wmc-card.com/wp-content/uploads/2014/08/WMC_logo_short_blue_large_small.png"
                alt=""
              />
            </ImageList>
          </Box>
        </Grid>
      </Container>
      <main>
        <Container maxWidth="lg">
          <Box
            justifyContent="center"
            alignItems="center"
            styles={{
              height: "300px",
              width: { xs: 100, sm: 200, md: 800, lg: 600, xl: 1000 },
            }}
            align="center"
          >
            <img
              src="https://images.unsplash.com/photo-1505318985551-5793f4a707bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </Box>
        </Container>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "40px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Travel Worry Free
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              You will have your own personal profile which can be accessed via
              app or browser. There is a built in translation function for 19
              languages which will ease communication in relevant local terms.
              Skip Tour
            </Typography>
          </Container>
        </div>
        <Grid Container spacing={2} align="center">
          <Grid item>
            <Button variant="contained">NEXT</Button>
          </Grid>
        </Grid>
      </main>
    </>
  );
};
export default WorryFree;
