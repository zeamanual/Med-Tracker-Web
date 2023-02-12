import React from "react";
import Add from "../pages/add";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MainPage from "../pages/main-page";
import ProfileUpdate from "../pages/profileUpdate";


const PageRouter = () => {
  return (

    <>
    <BrowserRouter>
      {/* { path.includes(window.location.pathname) ? <NavBar /> : null } */}
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/add"  element={<Add/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path='/profile' element={<ProfileUpdate/>} ></Route>
            {/* <Route path="*" element={ <div>page not found</div>}/> */}
        </Routes>
    </BrowserRouter>
    </>
  );
};

export default PageRouter;
