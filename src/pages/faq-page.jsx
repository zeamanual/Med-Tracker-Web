import CustomizedAccordions from "../components/UI-components/accordion";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import faq_data from "../service/faq-data.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FaqPage() {
  return (
    <>
      <Box my="40px" display={"flex"} justifyContent="space-between">
        <Typography variant="h3" fontWeight={"700"} m="auto">
          FAQ
        </Typography>
      </Box>
      <Box margin={6} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {faq_data.map((accordion, index) => (
            <Grid item xs={4} sm={8} md={6} key={index}>
              <CustomizedAccordions
                title={accordion.title}
                detail={accordion.detail}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
