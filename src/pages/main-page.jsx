import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MainPageCard from '../components/main-page-card';
import data from "../service/json-data"
import newData from "../service/new-json"
import { useEffect, useState } from 'react';
import {SnackBarModal} from '../components/snackbar-modal';

import DocumentLists from '../components/lists';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MainPage = () => {

    const user = useSelector((state) => state.user);
    const current_hour = new Date().getHours();
    let navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    console.log(newData);

    let data = [
      newData["user"]["allergies"],
      newData["user"]["medicines"],
      newData["user"]["diagnoses"],
      newData["user"]["vaccines"],
      newData["user"]["documents"]
    
    ]
    let titles =["Allergies","Medicines","Diagnoses","Vaccines","Documents"]
    
    useEffect(()=>{
      if(!user.token){
        navigate('/login')
      }
    })
    
    return ( 
    <Box minHeight={"100vh"}  paddingX={{xs:"1em",lg:"14em"}} bgcolor={{ xs:"#f8f8f8",md:"#daf2f8"}}>
    <Container  disableGutters maxWidth={false} >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between' ,
          py:2,
        }}> 
            <Typography sx={{fontWeight: 600 , p:1}} variant="h5">👋 {current_hour < 12?"Good morning":"Good night"} </Typography>
            <IconButton aria-label="three dot button" onClick={handleClickOpen}>
                <MoreVertIcon sx={{color:"black"}} />
            </IconButton>

        </Box>  
        {
          open? < SnackBarModal open={open} handleClose = {handleClose}  />:<></>      
        }
        {
        data.map((singleData,index)=>{
          console.log(singleData)
          return <MainPageCard key={singleData.name} index={index} titles={titles} singleData={singleData}/>
        })
        
        }
        
          
      </Container>
      </Box>
     );
}
 
export default MainPage;
