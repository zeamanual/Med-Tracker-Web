import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import MainPageCard from '../components/main-page-card';
import { useEffect, useState } from 'react';
import { SnackBarModal } from '../components/snackbar-modal';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../state/slices/user';
import { CircularProgress } from '@mui/material';
import { Button } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Profile from '../components/profile';


const MainPage = () => {

  const user = useSelector((state) => state.user);

  const current_hour = new Date().getHours();
  const [drawerState, setDrawerState] = useState(false);

  let dispatch = useDispatch()
  let navigate = useNavigate()
  let newData = useSelector(state => state.user)
  let getUserDataState = useSelector(state => state.user.getUserData)
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
  };

  let data = [
    newData["allergies"],
    newData["medicines"],
    newData["diagnoses"],
    newData["vaccines"],
    newData["documents"]

  ]
  let titles = ["Allergies", "Medicines", "Diagnoses", "Vaccines", "Documents"]

  useEffect(() => {
    if (!user.token) {
      navigate('/login')
    }
    dispatch(getUserData())
  }, [])

  return (
    <Box minHeight={"100vh"} paddingX={{ xs: "1em", lg: "14em" }} bgcolor={{ xs: "#f8f8f8", md: "#daf2f8" }}>
      <Container disableGutters maxWidth={false} >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 2,
        }}>
          <Typography sx={{ fontWeight: 600, p: 1 }} variant="h5">👋 {current_hour < 12 ? "Good morning" : "Good night"} </Typography>
          <IconButton aria-label="three dot button" onClick={handleClickOpen}>
            <MoreVertIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
        {
          open ? < SnackBarModal open={open} handleClose={handleClose} /> : <></>
        }

        {getUserDataState.loading ?
          <Box display={'flex'} justifyContent='center' minHeight={'50vh'} alignItems='center'>
            <CircularProgress></CircularProgress>
          </Box> :
          <Box>
            <Box sx={{ mb: 4, }}>
              <Box sx={{ backgroundColor: "white", borderRadius: "1.5em" }}>
                <Box
                  sx={{
                    width: '20rem', height: '7rem',
                    padding: '1.4rem 0 0 2rem',
                  }}
                >
                  <h3 style={{ paddingLeft: '.4rem' }}>{newData.fullName}</h3>
                  <p style={{ paddingLeft: '.4rem' }}>{newData.email}</p>
                  <Button onClick={toggleDrawer("right", true)}>Click here to edit</Button>
                </Box>
              </Box>
            </Box>

            {data.map((singleData, index) => {
              let id = index.toString()
              return <MainPageCard key={id} index={index} titles={titles} singleData={singleData} />
            })}

          </Box>
        }
        <SwipeableDrawer
          anchor={"right"}
          open={drawerState}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {<Profile toggleDrawer={toggleDrawer} />}
        </SwipeableDrawer>
      </Container>
    </Box>
  );
}

export default MainPage;
