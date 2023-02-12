import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ImageSwipper from "../components/ImageSwipper";
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import Footer from "../components/footer";

const Landing = () => {
    const navigate = useNavigate();
    const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    return ( 
        <>
            <ImageSwipper/>
            <Box my={"60px"}width={"100%"}>
                <Typography textAlign={"center"} fontWeight="bold" mb="15px" variant="h4">
                    WELCOME TO SHEGER LOUNGE
                </Typography>
                <Typography m="auto" width={"75%"} textAlign={"center"} variant="h6">
                    Sheger lounge is located in the beautiful city of addis ababa. Its location is magnificent as it is located on the coastal road of the city, thus offering a unique view of the sea.
                </Typography>

            </Box>

            <Box  m="auto" sx={{ width:{ xs: '75%', sm: '50%' }, display:"flex",  justifyContent:"space-between"}}>
                <Box mr="5px" height="50%" textAlign={"center"}>
                    <img  src="/images/1.png" alt="" />
                    <Typography textAlign={"center"} mb="5px" variant="h5" fontWeight={"bold"}>
                        75
                    </Typography>
                    <Typography m="auto" textAlign={"center"} variant="p">
                        Rooms
                    </Typography>     
                </Box>

                <Box mr="5px" height="50%" textAlign={"center"}>
                    <img  src="/images/2.png" alt="" />
                    <Typography textAlign={"center"} mb="5px" variant="h5" fontWeight={"bold"}>
                        300
                    </Typography>
                    <Typography m="auto" textAlign={"center"} variant="p">
                        Guests
                    </Typography>     
                </Box>                
                
                <Box mr="5px" height="50%" textAlign={"center"}>
                    <img  src="/images/3.png" alt="" />
                    <Typography textAlign={"center"} mb="5px" variant="h5" fontWeight={"bold"}>
                        2
                    </Typography>
                    <Typography m="auto" textAlign={"center"} variant="p">
                        Swimming Pool
                    </Typography>     
                </Box>
        

            </Box>

            <Box  my="80px" sx={{position:"relative" }}>
                <Typography variant="h6" fontWeight={"bold"}  color={"black"} width="80%" height={"80%"} textAlign={"center"}  sx={{overflow: 'auto', position:"absolute",fontWeight:"1", left:"10%", top:"10%", padding:"40px",opacity:"1", margin:"auto",background: "rgba(254, 254, 254, 0.8)"}}>
                The rooms of sheger lounge are designed in such a way as to offer its guests the simplicity and comfort they need to relax and unwind. All rooms are characterized by a pleasant simplicity, but without being deprived of the required modern comforts. They have a private bathroom, TV and air conditioning, among other amenities.

The privileged location of Sheger lounge is suitable for unlimited walks on the busy coastal road of Addis Ababa, where there are many taverns, restaurants and cafes-bars to explore. The center of Addis Ababa, where all the services you may need are located, is also easily accessible on foot.

Starting at Sheger lounge you can explore all that Addis Ababa has to offer in any area.
                </Typography>
            
                <Box ><img opacity={"0.5"} style={{objectFit:"cover"}} height="400px"  width={"100%"} src="/images/sheger5.jpg" alt="" /></Box>
            </Box>

            <Box my={"60px"} width={"100%"}>
                <Typography textAlign={"center"} fontWeight="bold" mb="15px" variant="h4">
                    REVIEW
                </Typography>
                <Typography m="auto" width={"75%"} textAlign={"center"} variant="h6">
                Starting at Hotel Plaza you can explore all that Kalamata has to offer in any area. You can also organize various excursions in the areas that surround the city and discover the beauties of Messinia. Contact the hotel staff for guidance on attractions worth visiting.                </Typography>


            </Box>
            <Box my="20px" width={"100%"} sx={{display:"flex",justifyContent:"center"}}>
                <Button onClick={e=>{navigate("/services")}}  m="auto" variant="outlined">View More</Button>
            </Box>
            <Box width={"100%"} sx={{display:"flex", justifyContent:"center"}} >
                {/* <Box  sx={{display:"flex", justifyContent:"center"}}> */}
                    <Grid width={"75%"} mx="auto"  alignItems="center" container columns={{ xs: 4, sm: 8, md: 10 }}>
                        {images.map((num, index) => (
                        <Grid  xs={2} sm={4} md={2} key={index}>
                            <img src={`/images/landing-icons/${num}.png`} alt="" />
                        </Grid>
                        ))}
                    </Grid>
                {/* </Box> */}
            </Box>

        <Footer/>
        </>
    );
}
 
export default Landing;