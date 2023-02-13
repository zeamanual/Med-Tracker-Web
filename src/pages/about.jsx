import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import ImageWithText from "../components/UI-components/image-with-text";
import ImageWithTextWhite from "../components/UI-components/image-with-text-white";

const About = () => {
  let title = "What is The World Medical Card.";
  let paragraph =
"The World Medical Card® is a subscription service designed to provide you with a safer everyday life, and make health professionals able to support you fast and accurate should you find yourself in a situation where it’s required. You will have your own personal profile which can be accessed via app or browser. Enter your critical health information and keep it updated. You can chose to share your profile with relatives, travel partner or others you trust, so that they can be able to provide you with first line of support. Your medical information is coded according to World Health Organizations global standards (ICD-10, ATC) to ensure that your condition and requirement is understood by health professionals and pharmaceutical personnel all over the world. There is a built in translation function for 4 languages which will ease communication in relevant local terms. The World Medical Card makes it easy for health professionals to support you when needed."
  return (
    <>

      {/* <ImageWithText /> */}
      <ImageWithTextWhite
        title={title}
        paragraph={paragraph}
        image={"littleGirl.png"}
      />
      <Box color={"lightGray"} bgcolor={"#33b9cb"} py={"80px"} width={"100%"}>

        <Typography
          textAlign={"center"}
          color="white"
          width={"50%"}
          margin={"auto"}
        //   fontWeight="400"
          mb="18px"
          fontSize={"26px"}
        >
          “We help people get fast and safe medical treatment by giving them an international health card with codes that can be read by doctors all over the world. In this way, we also help the doctors who treat the patient. ”
        </Typography>
        <Typography m="auto" width={"95%"} textAlign={"center"}>
          The World Medical Card® is an unique solution for Health About
          to help their patients. Here patients can safely store their essential
          health and related information. And make this available should an
          emergency situation arise. The information can be accessed via an app
          or physical card. Our solution is already used in 27 countries.{" "}
        </Typography>
        <Box display={"flex"} justifyContent="center" marginTop="40px">
          <Link
            to={"https://www.wmc-card.com/us/emergency/"}
            mx="auto"
            style={{
              borderRadius: "10px",
              textDecoration: "none",
              backgroundColor: "#a81515",
              color: "white",
              padding: "14px",
              paddingRight: "30px",
              paddingLeft: "30px",
            }}
          >
            {" "}
            Emergancy Code Access{" "}
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default About;
