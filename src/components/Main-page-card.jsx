import * as React from "react";
import Accordion from "@mui/material/Accordion";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Box } from "@mui/system";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// import Card from "./card"

export default function MainPageCard() {
  const condition = true;
  return (
    <Box sx={{mb:3}}>
      <Box sx={{ backgroundColor: "white", borderRadius: "15px" }}>
        <Accordion
          disableGutters
          sx={{
            backgroundColor: "transparent",
            borderRadius: "0em",
            boxShadow: "3",
            borderColor: "grey.800",
          }}
        >
          <AccordionSummary
            sx={{ backgroundColor: "white", borderRadius: "15Fpx" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panella-content"
            id="panella-header"
          >
            <Box sx={{ display: "flex", alignItems: "start" }}>
              <LocalHospitalIcon
                sx={{
                  fontWeight: 900,
                  color: condition ? "#08abfc" : "black",
                  pr: 2,
                  pt: 1,
                  fontSize: "22px",
                }}
              />
              <Box
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "12em",
                }}
              >
                <Typography sx={{ fontWeight: 900, fontSize: "22px" }}>
                  Medicine
                </Typography>
                <Typography
                  noWrap
                  sx={{ fontSize: "16px", textOverflow: "ellipsis" }}
                >
                  consectetur adipiscing elitconsectetur adipiscing
                  elitconsectetur adipiscing elitconsectetur adipiscing elit
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Divider />
            <Typography sx={{ py: 2, maxHeight:"70vh", overflowY: "scroll"}}>
            
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              egetLorem ipsum dolor sit amet, consectetur adipiscing elit.
             
            </Typography>
            <Box  sx={{ display: "flex",py:2, overflowX: "scroll"}}>
                <Box sx={{ mr:3 }}>
                    <Button sx={{borderRadius:"20px",color:"black", borderColor:"gray"}} variant="outlined" startIcon={ <DeleteIcon />}>
                    Delete
                    </Button>
                </Box>
                <Box sx={{ mr:3 }}>
                    <Button sx={{borderRadius:"20px",color:"black", borderColor:"gray"}} variant="outlined" startIcon={ <DeleteIcon />}>
                    Delete
                    </Button>
                </Box>
                <Box sx={{ mr:3 }}>
                    <Button sx={{borderRadius:"20px",color:"black", borderColor:"gray"}} variant="outlined" startIcon={ <DeleteIcon />}>
                    Delete
                    </Button>
                </Box>
                <Box>
                    <Button sx={{borderRadius:"20px",color:"black", borderColor:"gray"}} variant="outlined" startIcon={ <DeleteIcon />}>
                    Delete
                    </Button>
                </Box>
              
              
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
