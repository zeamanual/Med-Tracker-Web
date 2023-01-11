import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MainPageCard from '../components/Main-page-card';
import { useCallback, useEffect } from 'react';
import data from "../service/json-data"
import { DataArray } from '@mui/icons-material';


const MainPage = () => {
    console.log(data);
   
    const current_hour = new Date().getHours();
    return ( 
    <Container disableGutters maxWidth={false}   >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between' ,
          py:2,
        }}> 
            <Typography sx={{fontWeight: 900 , p:1}} variant="h6">👋 {current_hour < 12?"Good morning":"Good night"}</Typography>
            <IconButton aria-label="three dot button" onClick={() => { console.log('THREE DOT CLICKED');}}>
                <MoreVertIcon sx={{color:"black"}} />
            </IconButton>
            
        </Box>  
        {/* <MainPageCard/> */}
        {
        data.map((singleData)=>{
          return <MainPageCard singleData={singleData}/>
        })
        
        }
        
          
      </Container>
     );
}
 
export default MainPage;
