import React from "react";
import Add from "../pages/add";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MainPage from "../pages/main-page";
import ProfileUpdate from "../pages/profileUpdate";
import Landing from "../pages/landing";
import About from "../pages/about";
import Business from "../pages/business";
import Professionals from "../pages/professionals";
import MedicalCard from "../pages/WorldMedicalCard";
import WorryFree from "../pages/TravelWorryFree";
import Info from "../pages/ShareYourInfo";
import NavBar from "../components/navbar";
import Footer from "../components/footer";



const PageRouter = () => {
  return (

    <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/home" element={<MainPage/>}/>
            <Route path="/add"  element={<Add/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path='/profile' element={<ProfileUpdate/>} ></Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/business" element={<Business/>}/>
            <Route path="/medicalcard" element={<MedicalCard/>}/>
            <Route path="/worryFree" element={<WorryFree/>}/>
            <Route path="/info" element={<Info/>}/> 
            <Route path="/professionals" element={<Professionals/>}/>
            <Route path="*" element={ <div>page not found</div>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  );
};

export default PageRouter;
