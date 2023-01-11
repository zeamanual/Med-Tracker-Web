import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MainPageCard from '../components/Main-page-card';

const MainPage = () => {
    const current_hour = new Date().getHours();
    console.log(current_hour);
    return ( 
    <Container disableGutters maxWidth={false} sx={{backgroundColor:""}}  >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between' 
        }}> 
            <Typography sx={{fontWeight: 900 , p:1}} variant="h6">👋 {current_hour < 12?"Good morning":"Good night"}</Typography>
            <IconButton aria-label="three dot button" onClick={() => { console.log('THREE DOT CLICKED');}}>
                <MoreVertIcon sx={{color:"black"}} />
            </IconButton>
            
        </Box>  
        <MainPageCard/>
        <MainPageCard/>
        <MainPageCard/>
        <MainPageCard/>
          
      </Container>
     );
}
 
export default MainPage;
