import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MainPageCard from '../components/main-page-card';
import newData from "../service/new-json"
import { useEffect, useState } from 'react';
import {SnackBarModal} from '../components/snackbar-modal';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Profile from '../components/profile';


const MainPage = () => {

    const user = useSelector((state) => state.user);
     const [drawerState, setDrawerState] = useState(false);
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
    const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
  };

    const data = [
      user.allergies,
      user.medicines,
      user.diagnoses,
      user.vaccines,
      user.documents
    
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
        
        <Box sx={{ mb: 4 ,}}>
      <Box sx={{ backgroundColor: "white", borderRadius: "1.5em" }}>
        <Box 
        
        
          sx={{
             width: '20rem', height: '7rem',
            padding: '1.4rem 0 0 2rem',
            
          }}
        >
          <h3 style={{paddingLeft:'.4rem'}}>Gemechis Urgessa</h3>
          <p style={{paddingLeft:'.4rem'}}>Member since 2020</p>
          <Button onClick={toggleDrawer("right", true)}>Click here to edit</Button>
        </Box>
        </Box>
        </Box>
        {data.map((singleData,index)=>{
          console.log(singleData)
          return <MainPageCard key={singleData.name} index={index} titles={titles} singleData={singleData}/>
        })
        
        }
        
          <SwipeableDrawer
        anchor={"right"}
        open={drawerState}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
            {<Profile toggleDrawer={toggleDrawer} />}
          </SwipeableDrawer>
      </Container>
      </Box>
     );
}
 
export default MainPage;
