import { ArrowBack, Expand, Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Box, Button, CircularProgress, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetSignupFormStatus, userSignup } from '../state/slices/user'

function Signup() {


    let userState = useSelector(state => state.user)
    let dispatch = useDispatch()
    let [signupDetails, setSignupDetails] = React.useState({ userName: '', password: '' })
    let [errorDetails, setErrorDetails] = React.useState({ userName: { hasError: false, msg: '' }, password: { hasError: false, msg: '' }, isFormValid: false })
    let [showPassword, setShowPassword] = React.useState(false)

    React.useEffect(() => {
        dispatch(resetSignupFormStatus())
    }, [])

    let formSubmitHandler = (e) => {
        e.preventDefault();
        if ((!errorDetails.userName.hasError && !signupDetails.userName) && (!errorDetails.password.hasError && signupDetails.password)) {
            dispatch(userSignup({ username: signupDetails.userName, password: signupDetails.password }))

        }
    }

    let usernameChangeHandler = (e) => {
        setSignupDetails({ ...signupDetails, userName: e.target.value })
        if (e.target.value.length < 5) {
            setErrorDetails({
                ...errorDetails,
                userName: {
                    hasError: true,
                    msg: 'User Name must be at least 5 characters'
                },
                isFormValid: false
            })
        } else {
            setErrorDetails({
                ...errorDetails,
                userName: {
                    hasError: false,
                    msg: ''
                },
                isFormValid: (true && !errorDetails.password.hasError && signupDetails.password)
            })
        }
    }

    let passwordChangeHandler = (e) => {
        setSignupDetails({ ...signupDetails, password: e.target.value })
        if (e.target.value.length < 8) {
            setErrorDetails({
                ...errorDetails,
                password: {
                    hasError: true,
                    msg: 'Password must be at least 8 characters'
                },
                isFormValid: false
            })
        } else {
            setErrorDetails({
                ...errorDetails,
                password: {
                    hasError: false,
                    msg: ''
                },
                isFormValid: (true && !errorDetails.userName.hasError && signupDetails.userName)
            })
        }
    }

    let passwordvisibilityHandler = () => {
        setShowPassword(!showPassword)
    }

    let handleModalClose = () => {
        dispatch(resetSignupFormStatus())
    }
    return (
        <Box py={5} bgcolor='#f8f8f8' height={'100vh'} display='flex' justifyContent='center' >

            {/* log in state UI */}
            <Modal
                open={userState.userSignup.loading ||
                    userState.userSignup.errorMsg ||
                    userState.userSignup.successMsg
                }
                onClose={handleModalClose}
            >
                <Box display='flex'
                    position='absolute'
                    top='50%'
                    left='50%'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    sx={{ transform: 'translate(-50%,-50%)' }}
                >
                    {userState.userSignup.errorMsg && <Alert severity='error'>{userState.userSignup.errorMsg}</Alert>}
                    {userState.userSignup.loading && <CircularProgress color='primary' />}
                </Box>
            </Modal>

            <Box display={'flex'} flexDirection={'column'} justifyContent='space-between' width={{ xs: '100vw', md: '60vw', lg: '50vw' }}>
                <Box>
                    <Box display='flex' justifycontent='start' >
                        <ArrowBack></ArrowBack>
                    </Box>
                    <Box display={'flex'} flexDirection='column' p={2}>
                        <Typography my={0} sx={{ fontWeight: '800' }} variant='h6'>Signup to World Medical Card </Typography>
                        <Typography my={2}  variant='body1' color='gray' >How would you like to sign-up?</Typography>
                    </Box>
                    <Box m={1} display='flex' justifyContent={'center'} padding={1} bgcolor='white' borderRadius={3}  >
                        <Typography  p={1} variant='body1'>Sign-up with Google</Typography>
                    </Box>
                    <Box mt={6} display={'flex'} justifyContent='center'>
                        <Typography color={'lightGray'} > _______________ <Typography px={2} sx={{ display: 'inline', fontWeight: '600' }} color='gray'>OR</Typography> _______________</Typography>
                    </Box>

                    <Box justifyContent={'space-between'} display={'flex'} flexDirection='column'>

                    <Box m={2}>
                        <Box my={3} bgcolor='white'>
                            <TextField sx={{ m: 1 }} variant="standard" InputProps={{ disableUnderline: true, }} fullWidth={true} size='large' value={signupDetails.userName}
                                onChange={usernameChangeHandler} label='Username' ></TextField>
                            {errorDetails.userName.hasError ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{errorDetails.userName.msg}</Alert> : <></>}
                        </Box>
                        <Box my={2} bgcolor='white' >
                            <TextField
                                sx={{ m: 1 }}
                                size='large'
                                type={showPassword ? 'text' : 'password'}
                                value={signupDetails.password}
                                onChange={passwordChangeHandler}
                                label='password'
                                variant="standard"
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={passwordvisibilityHandler}>
                                                {showPassword ? <VisibilityOff /> : <Visibility></Visibility>}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth={true}
                            ></TextField>
                            {errorDetails.password.hasError ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{errorDetails.password.msg}</Alert> : <></>}

                        </Box>
                    </Box>
                </Box>

                </Box>
                <Box height='auto' m={2} mt="auto" display={'flex'} flexDirection={'column'} alignItems='center' >
                        <Typography pb={"20px"}>All ready have an account ? <Link to={"/login"}>Login</Link> </Typography>
                        <Box width={'100%'} borderRadius={30} overflow='hidden'>
                            <Button onClick={formSubmitHandler} sx={{bgcolor: !errorDetails.isFormValid || userState.userSignup.loading ? "lightBlue" : "primary",padding:'0.7em'}}  fullWidth type='submit' variant='contained'>Sign up</Button>
                        </Box>
                    </Box>
            </Box>
        </Box>
    )
}
export default Signup
