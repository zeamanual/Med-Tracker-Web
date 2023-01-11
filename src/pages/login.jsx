import { ArrowBack, Expand, Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Box, Button, CircularProgress, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetLoginFormStatus, userLogin } from '../state/slices/user'

function Login() {


    let userState = useSelector(state => state.user)
    let dispatch = useDispatch()
    let [loginDetails, setLoginDetails] = React.useState({ userName: '', password: '' })
    let [errorDetails, setErrorDetails] = React.useState({ userName: { hasError: false, msg: '' }, password: { hasError: false, msg: '' }, isFormValid: false })
    let [showPassword, setShowPassword] = React.useState(false)

    React.useEffect(() => {
        dispatch(resetLoginFormStatus())
    }, [])

    let formSubmitHandler = (e) => {
        e.preventDefault();
        if ((!errorDetails.userName.hasError && loginDetails.userName) && (!errorDetails.password.hasError && loginDetails.password)) {
            dispatch(userLogin({ username: loginDetails.userName, password: loginDetails.password }))

        }
    }

    let usernameChangeHandler = (e) => {
        setLoginDetails({ ...loginDetails, userName: e.target.value })
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
                isFormValid: (true && !errorDetails.password.hasError && loginDetails.password)
            })
        }
    }

    let passwordChangeHandler = (e) => {
        setLoginDetails({ ...loginDetails, password: e.target.value })
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
                isFormValid: (true && !errorDetails.userName.hasError && loginDetails.userName)
            })
        }
    }

    let passwordvisibilityHandler = () => {
        setShowPassword(!showPassword)
    }

    let handleModalClose = () => {
        dispatch(resetLoginFormStatus())
    }
    return (
        <Box bgcolor='#e6e3e3' height={'100vh'} display='flex' justifyContent='center' >
          
            {/* log in state UI */}
            <Modal
                open={userState.userLogIn.loading ||
                    userState.userLogIn.errorMsg ||
                    userState.userLogIn.successMsg
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
                    {userState.userLogIn.errorMsg && <Alert severity='error'>{userState.userLogIn.errorMsg}</Alert>}
                    {userState.userLogIn.loading && <CircularProgress color='primary' />}
                </Box>
            </Modal>

            <Box width={{ xs: '100vw', md: '60vw', lg: '50vw' }}>
                <Box display='flex' justifycontent='start' >
                    <ArrowBack></ArrowBack>
                </Box>
                <Box display={'flex'} flexDirection='column' p={2}>
                    <Typography variant='h4'>Login to World Medical Card </Typography>
                    <Typography variant='body1' color='gray' >How would you like to sign-in?</Typography>
                </Box>
                <Box m={2} display='flex' justifyContent={'center'} padding={1} bgcolor='white' borderRadius={3}  >
                    <Typography variant='h6'>Sign-in with Google</Typography>
                </Box>
                <Box display={'flex'} justifyContent='center'>
                    <Typography>------------------ <Box px={2} component={'span'} >or</Box> ---------------</Typography>
                </Box>

                <Box justifyContent={'space-between'} display={'flex'} flexDirection='column'>

                    <Box m={2}>
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={loginDetails.userName} onChange={usernameChangeHandler} size='small' label='Username' ></TextField>
                            {errorDetails.userName.hasError ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{errorDetails.userName.msg}</Alert> : <></>}
                        </Box>
                        <Box my={2} bgcolor='white' >
                            <TextField
                                type={showPassword ? 'text' : 'password'}
                                value={loginDetails.password}
                                onChange={passwordChangeHandler}
                                size='small' label='password'
                                InputProps={{
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
                        <Typography>Forgot Password ?</Typography>
                        <Box width={'100%'} borderRadius={30} overflow='hidden'>
                            <Button onClick={formSubmitHandler} disabled={!errorDetails.isFormValid || userState.userLogIn.loading ? true : false} sx={{ padding: '0.7em' }} fullWidth type='submit' variant='contained'>Log in</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Login