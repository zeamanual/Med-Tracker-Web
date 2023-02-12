import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
const ImageWithTextWhite = ({title,paragraph,image}) => {
  return (
    <Box
      p={6}
      py="9em"
      mx={"auto"}
      bgcolor={"#lightGray"}
      color="black"
      display={"flex"}
      justifyContent="space-around"
      flexDirection={{ xs: "column", md: "row" }}
      my={"40px"}
    >
      <Box width={"20%"}  marginLeft="5em">
        <img src={`images/${image}`} alt="woman photo" />
      </Box>
      <Box  p={9} width={{ xs: "100%", md: "50%" }}>
        <Typography
          // textAlign={"center"}
          // fontWeight="bold"
          mb="20px"
          variant="h4"
        >
          {title}
        </Typography>
        <Typography m="auto" textAlign={"start"}  lineHeight="35px">
          {paragraph}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageWithTextWhite;
