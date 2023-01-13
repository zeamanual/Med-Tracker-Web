import * as React from "react";
import Accordion from "@mui/material/Accordion";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { Box } from "@mui/system";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Divider } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import StyleIcon from '@mui/icons-material/Style';
import VaccinesIcon from '@mui/icons-material/Vaccines';

export default function MainPageCard({ singleData }) {
  console.log(singleData, "data for each apperaed");

  const style ={
    fontWeight: 900,
    color: singleData.addedList.length === 0 ? "gray.600" : "#4298e1",
    pr: 2,
    pt: 1,
    fontSize: "22px",
  }

  const Icons ={
    'Medicine': <LocalHospitalIcon sx={style} />,
    'Allergies':<VaccinesIcon  sx={style}/>,
    "Diagnoses" : <InsertDriveFileIcon  sx={style}/>,
    "Vaccines": <StyleIcon sx={style} />
  }
 


  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ backgroundColor: "white", borderRadius: "10px" }}>
        <Box
          sx={{
            borderRadius: "0.5em",
            overflow: "hidden",
            boxShadow: "1px 1px 5px 0.1px gray",
          }}
        >
          <Accordion
            disableGutters
            sx={{
              backgroundColor: "transparent",
              borderRadius: "0.5em",
            }}
          >
            <AccordionSummary
              sx={{ backgroundColor: "white", borderRadius: "15px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panella-content"
              id="panella-header"
            >
              <Box sx={{ display: "flex", alignItems: "start" }}>
              { Icons[singleData.name]}
                               
                {/* <LocalHospitalIcon

                />  */}

                <Box
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "12em",
                  }}
                >
                  <Typography sx={{ fontWeight: 900, fontSize: "22px" }}>
                    {singleData.name}
                  </Typography>
                  <Typography
                    noWrap
                    sx={{ fontSize: "16px", textOverflow: "ellipsis" }}
                  >
                    {singleData.addedList.length === 0
                      ? `No ${singleData.name.toLowerCase()} listed`
                      : `${singleData.addedList.length} ${singleData.addedList.length === 1?"item":"items"}: ${singleData.addedList[0].title}`}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Typography
                sx={{ py: 2, maxHeight: "70vh", overflowY: "scroll" }}
              >
                {singleData.addedList.map((each) => {
                  return (
                    <Box>
                      <Typography>{each.title}</Typography>
                      <Typography sx={{ fontSize: "10px" }}>
                        {each.code}
                      </Typography>
                    </Box>
                  );
                })}
              </Typography>
              <Box sx={{ display: "flex", py: 1, overflowX: "scroll" }}>
              {singleData.addedList.length > 0 ? <Box sx={{ mr: 2 }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "20px",
                      color: "black",
                      fontWeight:"800",
                      borderColor: "gray",
                    }}
                    variant="outlined"
                    startIcon={<LanguageIcon sx={{color:"gray"}} />}
                  >
                    Translate
                  </Button>
                </Box>:""}

                <Box sx={{ mr: 2 }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "20px",
                      color: "black",
                      fontWeight:"800",
                      borderColor: "gray",
                    }}
                    variant="outlined"
                    startIcon={<AddIcon sx={{color:"gray"}} />}
                  >
                    Add
                  </Button>
                </Box>
                {singleData.addedList.length > 0 ? <Box sx={{ mr: 2 }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "20px",
                      color: "black",
                      fontWeight:"800",
                      borderColor: "gray",
                    }}
                    variant="outlined"
                    startIcon={<EditIcon sx={{color:"gray"}} />}
                  >
                    Edit
                  </Button>
                </Box>:""}
                {singleData.addedList.length > 0 ? <Box>
                  <Button
                  
                    sx={{
                      textTransform: "none",
                      borderRadius: "20px",
                      color: "black",
                      fontWeight:"800",
                      borderColor: "gray",
                    }}
                    variant="outlined"
                    startIcon={<ShareIcon sx={{color:"gray"}} />}
                  >
                    Share
                  </Button>
                </Box>:""}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
}
