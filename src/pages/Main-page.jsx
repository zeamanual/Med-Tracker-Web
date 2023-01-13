import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MainPageCard from '../components/Main-page-card';
import data from "../service/json-data"


const MainPage = () => {
    const current_hour = new Date().getHours();
    return ( 
    <Container disableGutters maxWidth={false}   >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between' ,
          py:2,
        }}> 
            <Typography sx={{fontWeight: 600 , p:1}} variant="h5">👋 {current_hour < 12?"Good morning":"Good night"}</Typography>
            <IconButton aria-label="three dot button" onClick={() => { console.log('THREE DOT CLICKED');}}>
                <MoreVertIcon sx={{color:"black"}} />
            </IconButton>
            
        </Box>  
        {
        data.map((singleData)=>{
          return <MainPageCard singleData={singleData}/>
        })
        
        }
        
          
      </Container>
     );
}
 
export default MainPage;
