import React from "react";
import { Typography, CssBaseline, Grid, Container } from "@mui/material";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";

const Info = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Grid>
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
          <Box>
            <img
              src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1083&q=80"
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
              Share your info
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              You can chose to share your profile with relatives, travel partner
              or others you trust, so that they can be able to provide you with
              first line of support.
            </Typography>
          </Container>
        </div>
        <Grid Container spacing={2} align="center">
          <Button variant="skip">Skip Tour</Button>
        </Grid>
      </main>
    </>
  );
};
export default Info;
