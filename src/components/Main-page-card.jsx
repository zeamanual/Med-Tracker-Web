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
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import StyleIcon from '@mui/icons-material/Style';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { RemoveSnackBar } from "./snackbar-modal";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Add from "../pages/add";
import Document_Lists from "./lists";


export default function MainPageCard({ singleData,index,titles }) {
  // console.log(singleData, "data for each apperaed");

  console.log(singleData.length,"single data in his home",titles);

  const style ={
    fontWeight: 900,
    color: singleData.length === 0 ? "#373f4a" : "#4298e1",
    pr: 2,
    pt: 1,
    fontSize:"45px"
  }

  const buttonStyle = {
    textTransform: "none",
    borderRadius: "20px",
    color: "black",
    fontWeight:"800",
    borderColor: "gray",
  }

  const Icons ={
    '0': <VaccinesIcon  sx={style}/>,
    '1':<LocalHospitalIcon sx={style} />,
    "2" : <InsertDriveFileIcon  sx={style}/>,
    "3": <StyleIcon sx={style} />,
    "4": <FolderIcon sx={style} />
  }
 
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  


  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ backgroundColor: "white", borderRadius: "1.5em" }}>
        <Box 
        borderRadius={{xs:'0.5em',md:"1.5em"}}
        boxShadow={{xs:"1px 1px 7px  #a3a3a3",md:"0px 1px 2px  lightGray"}}
        
          sx={{
            overflow: "hidden",
            // boxShadow: "1px 1px 7px  gray",
          }}
        >
          <Accordion
            disableGutters
            borderRadius={{xs:'0.5em',md:"1.5em"}}
            sx={{
              backgroundColor: "transparent",
              // borderRadius: "2em",
            }}
          >
            <AccordionSummary
              sx={{ backgroundColor: "white", borderRadius: "15px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panella-content"
              id="panella-header"
            >
              <Box sx={{ display: "flex", alignItems: "start" }}>
              { Icons[index]}
              {/* <LocalHospitalIcon  /> */}
                               

                <Box
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "12em",
                  }}
                >
                  <Typography pl={{xs:'0.1em',md:"24px"}}  sx={{ fontWeight: 600, fontSize: "22px" }}>
                    {titles[index]}
                    
                  </Typography>
                  <Typography color={"gray"} pl={{xs:'0.1em',md:"24px"}}
                    noWrap
                    sx={{ fontSize: "16px", textOverflow: "ellipsis" }}
                  >
                    {singleData.length === 0
                      ? `No ${ titles[index].toLowerCase()} listed`
                      : `${singleData.length} ${singleData.length === 1?"item":"items"}: ${ index==4? singleData[0].title: singleData[0].name}`}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Box
                sx={{ py: 2, maxHeight: "70vh", overflowY: "scroll" }}
              >
                {index ===4? <Document_Lists title= /> :
                singleData.map((each,index) => {
        
                  return (
                    <Box key={index}>
                      <Typography>{each.name}</Typography>
                      <Typography sx={{ fontSize: "10px" }}>
                        {each.code}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
                  {
              open? < RemoveSnackBar open={open} handleClose = {handleClose}  />:<></>      
            }
              <Box  overflow={{xs:'scroll',md:"hidden"}}  sx={{ display: "flex", py: 1, }}>
              {singleData.length > 0 ? <Box sx={{ mr: 2 }}>
                  <Button
                    sx={buttonStyle}
                    variant="outlined"
                    startIcon={<LanguageIcon sx={{color:"gray"}} />}
                  >
                    Translate
                  </Button>
                </Box>:""}

                <Box sx={{ mr: 2 }}>
                  <Link 
                    style={{ textDecoration: 'none' }}
                    to="/add" state={{ id: 2 }}>
                  <Button
                   
                    sx={buttonStyle}
                    variant="outlined"
                    startIcon={<AddIcon sx={{color:"gray"}} />}
                  >
                    Add
                  </Button>
                  </Link>
                </Box>
                {singleData.length > 0 ? <Box sx={{ mr: 2 }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={buttonStyle}
                    variant="outlined"
                    startIcon={<EditIcon sx={{color:"gray"}} 
                    />}
                  >
                    Edit
                  </Button>
                </Box>:""}
                {singleData.length > 0 ? <Box>
                  <Button
                  
                    sx={buttonStyle}
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
