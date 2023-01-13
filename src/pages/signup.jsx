import { ArrowBack, Expand, Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Box, Button, CircularProgress, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetLoginFormStatus, resetSignupFormStatus, userSignup } from '../state/slices/user'

function SignUp() {


    let userState = useSelector(state => state.user)
    let dispatch = useDispatch()
    let [signupDetails, setLoginDetails] = React.useState({ userName: '', password: '' })
    let [errorDetails, setErrorDetails] = React.useState({ userName: { hasError: false, msg: '' }, password: { hasError: false, msg: '' }, isFormValid: false })
    let [showPassword, setShowPassword] = React.useState(false)

    React.useEffect(() => {
        dispatch(resetSignupFormStatus())
    }, [])

    let formSubmitHandler = (e) => {
        e.preventDefault();
        if ((!errorDetails.userName.hasError && signupDetails.userName) && (!errorDetails.password.hasError && signupDetails.password)) {
            dispatch(userSignup({ username: signupDetails.userName, password: signupDetails.password }))

        }
    }

    let usernameChangeHandler = (e) => {
        setLoginDetails({ ...signupDetails, userName: e.target.value })
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
        setLoginDetails({ ...signupDetails, password: e.target.value })
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
        <Box bgcolor='#f8f8f8' height={'100vh'} display='flex' justifyContent='center' >

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

            <Box width={{ xs: '100vw', md: '60vw', lg: '50vw' }}>
                {/* <Box display='flex' justifycontent='start' >
                    <ArrowBack></ArrowBack>
                </Box> */}
                <Box display={'flex'} flexDirection='column' p={2}>
                    <Typography sx={{ fontWeight: '800' }} variant='h6'>Sign Up to World Medical Card </Typography>
                    <Typography variant='body1' color='gray' >How would you like to sign-up?</Typography>
                </Box>
                <Box m={1} display='flex' justifyContent={'center'} padding={1} bgcolor='white' borderRadius={3}  >
                    <Typography variant='body1'>Sign-up with Google</Typography>
                </Box>
                <Box mt={5} display={'flex'} justifyContent='center'>
                    <Typography color={'gray'} >------------------ <Typography px={2} sx={{ display: 'inline', fontWeight: '600' }} color='gray'>OR</Typography> ---------------</Typography>
                </Box>

                <Box justifyContent={'space-between'} display={'flex'} flexDirection='column'>

                    <Box m={2}>
                        <Box my={2} bgcolor='white'>
                            <TextField sx={{ mx: 2 }} variant="standard" InputProps={{ disableUnderline: true, }} fullWidth={true} size='large' value={signupDetails.userName}
                                onChange={usernameChangeHandler} label='Username' ></TextField>
                            {errorDetails.userName.hasError ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{errorDetails.userName.msg}</Alert> : <></>}
                        </Box>
                        <Box my={2} bgcolor='white' >
                            <TextField
                                sx={{ mx: 2 }}
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
                    <Box height='auto' m={2} display={'flex'} flexDirection={'column'} alignItems='center'>
                        {/* <Typography>Forgot Password ?</Typography> */}
                        <Box width={'100%'} borderRadius={30} overflow='hidden'>
                            <Button onClick={formSubmitHandler} disabled={!errorDetails.isFormValid || userState.userSignup.loading ? true : false} sx={{ padding: '0.7em' }} fullWidth type='submit' variant='contained'>Sign up</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default SignUp