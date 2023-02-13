import React from 'react';
import {Typography, CssBaseline, Grid, Container} from '@mui/material'
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';

const MedicalCard = () => {
  return (
      <>
      <CssBaseline/>
      <Container maxWidth = "xs" >
       <Grid 
            container
            spacing={0}  
            justifyContent="center"
            alignItems="center">
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center">
      <ImageList styles={{height:'1%',width:'2'}} align = "center" padding = '20px'>
           <img 
           src='https://www.wmc-card.com/wp-content/uploads/2014/08/WMC_logo_short_blue_large_small.png'
           alt=''
           />
          </ImageList> 
      </Box>
      </Grid>
      </Container> 
      <main>
        <Container maxWidth = "lg">
          <Box  
             justifyContent="center"
             alignItems="center"
              styles={{height:'300px', width:{xs:100,sm:200,md:800,lg:600,xl:1000}}} align = "center">
          
           <img 
           src='https://worldmedicalcard.org/wp-content/uploads/elementor/thumbs/card-ad-q0uij5fq27mp368i6bcsc93o6wmixz4lip5i54g2d8.png'
           alt=''
           />
          
          </Box>
          </Container>
        <div>
          <Container maxWidth = "sm" style= {{marginTop: "40px"}}>
          <Typography variant='h2' align = "center" color = "textPrimary" gutterBottom>
            World Medical Card
          </Typography>
          <Typography variant = "h5" align = "center" color= 'textSecondary' paragraph>
              YOUR PERSONAL MEDICAL RECORD
              ALWAYS AVAILABLE
              LOGIN          
                </Typography>
          </Container>
        </div>
        <Grid Container spacing={2} align = "center">
          
          <Button variant="contained">LOGIN</Button>
          

        </Grid>
      </main>
      </>
  )
}
export default MedicalCard;