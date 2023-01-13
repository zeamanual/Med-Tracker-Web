import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MainPageCard from '../components/Main-page-card';
import data from "../service/json-data"
import { useState } from 'react';
import {SnackBarModal} from '../components/snackbar-modal';


const MainPage = () => {
    const current_hour = new Date().getHours();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    
    return ( 
    <Container disableGutters maxWidth={false}   >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between' ,
          py:2,
        }}> 
            <Typography sx={{fontWeight: 600 , p:1}} variant="h5">👋 {current_hour < 12?"Good morning":"Good night"}</Typography>
            <IconButton aria-label="three dot button" onClick={handleClickOpen}>
                <MoreVertIcon sx={{color:"black"}} />
            </IconButton>

        </Box>  
        {
          open? < SnackBarModal open={open} handleClose = {handleClose}  />:<></>      
        }
        {
        data.map((singleData,index)=>{
          return <MainPageCard key={index} singleData={singleData}/>
        })
        
        }
        
          
      </Container>
     );
}
 
export default MainPage;
