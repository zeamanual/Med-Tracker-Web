import CustomizedAccordions from "../components/UI-components/accordion";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FaqPage() {

    const faq_data = [
        {
            title:"What is World Medical Card?",
            detail:"The World Medical Card is an important and practical tool for preventing unwanted situations, ensuring fast and safe treatment and ultimately saving lives."
        },
        {
            title:"How does World Medical Card work and what is unique?",
            detail:"The World Medical Card is built upon the standards of World Health Organization. It allows health professionals all over the world to easily identify the patient and uncover the patients critical medical needs. When you enter your diagnosis and/or medicines the system will add a code corresponding with the international coding system for diagnosis ICD-10, and medicines ATC. In addition the system have an unique and extensive allergies which allows translation into 19 languages. The World Medical Card allows you to take control over your medical journal and always keep it up to date."
        },
        {
            title:"Why should I have the World Medical Card?",
            detail:"The card gives health personnel access to your vital medical information (allergies, medications and illnesses) to ensure that you receive immediate and correct medical treatment. You should also register your next of kin. In addition you can include information such as: insurance details, medical history, and other important information which may be crucial to know in an emergency situation."
        },
        {
            title:"I am healthy, why should I order a World Medical Card?",
            detail:"Having your medical history available, even if you are healthy, allows treatment to begin faster. If you do not have any allergies or illnesses, you should register contact information of your nearest relatives or family physician. It is important to have this information available also for people in perfect health, not least in a situation where you are, for example, unconscious."
        },
        {
            title:"I do not/seldom travel. Do I still need the World Medical Card?",
            detail:"In the case of an emergency, whether at home or abroad, it’s important that things happen fast. An emergency room physician will not have access to your medical journal from your family physician and thus not know your medical history. The World Medical Card and APP provide them with your medical history quickly so that you receive the most correct treatment possible. Travel insurance provides only for the financial aspects to treatment."
        },
        {
            title:"How much does World Medical Card cost?",
            detail:"No special equipment is required. When the seal is broken, the information can be read as normal text (see picture 2) In an emergency situation the card contains an emergency code which allows heath professionals to access your profile and read it."
        },
        {
            title:"What type of information is useful to store in My Files?",
            detail:"The card gives health personnel access to your vital medical information (allergies, medications and illnesses) to ensure that you receive immediate and correct medical treatment. You should also register your next of kin. In addition you can include information such as: insurance details, medical history, and other important information which may be crucial to know in an emergency situation."
        },
        {
            title:"How much does World Medical Card cost?",
            detail:"Having your medical history available, even if you are healthy, allows treatment to begin faster. If you do not have any allergies or illnesses, you should register contact information of your nearest relatives or family physician. It is important to have this information available also for people in perfect health, not least in a situation where you are, for example, unconscious."
        },
        {
            title:"What happens if I lose my card?",
            detail:"In the case of an emergency, whether at home or abroad, it’s important that things happen fast. An emergency room physician will not have access to your medical journal from your family physician and thus not know your medical history. The World Medical Card and APP provide them with your medical history quickly so that you receive the most correct treatment possible. Travel insurance provides only for the financial aspects to treatment."
        },
        {
            title:"Will the medical staff find my World Medical Card?",
            detail:"No special equipment is required. When the seal is broken, the information can be read as normal text (see picture 2) In an emergency situation the card contains an emergency code which allows heath professionals to access your profile and read it."
        },
        {
            title:"How long does it take to receive my World Medical Card?",
            detail:"The World Medical Card is an important and practical tool for preventing unwanted situations, ensuring fast and safe treatment and ultimately saving lives."
        },
        {
            title:"What information is in the APP that is not included in the card?",
            detail:"The World Medical Card is built upon the standards of World Health Organization. It allows health professionals all over the world to easily identify the patient and uncover the patients critical medical needs. When you enter your diagnosis and/or medicines the system will add a code corresponding with the international coding system for diagnosis ICD-10, and medicines ATC. In addition the system have an unique and extensive allergies which allows translation into 19 languages. The World Medical Card allows you to take control over your medical journal and always keep it up to date."
        },

        {
            title:"Can I print out information from my profile to consult with my physician?",
            detail:"The card gives health personnel access to your vital medical information (allergies, medications and illnesses) to ensure that you receive immediate and correct medical treatment. You should also register your next of kin. In addition you can include information such as: insurance details, medical history, and other important information which may be crucial to know in an emergency situation."
        },
        {
            title:"Can I update my health profile on my mobile device?",
            detail:"The World Medical Card is an important and practical tool for preventing unwanted situations, ensuring fast and safe treatment and ultimately saving lives."
        },
    ]
  return (
    <>
    <Box my="40px" display={"flex"} justifyContent="space-between">
        <Typography variant="h3" fontWeight={"700"} m="auto">FAQ</Typography>
    </Box>
    <Box margin={6} sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {faq_data.map((accordion, index) => (
            <Grid item xs={4} sm={8} md={6} key={index}>
            <CustomizedAccordions title={accordion.title} detail={accordion.detail}/>
            
            </Grid>
        ))}
        </Grid>
    </Box>
    </>
  );
}
