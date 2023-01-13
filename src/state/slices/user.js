import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginAPI, profileUpdateAPI, SignupAPI } from "../../service/user"

let initialState = {
    loading: false,
    userLogIn: {
        loading: false,
        errorMsg: '',
        successMsg: ''
    },
    userSignup: {
        loading: false,
        errorMsg: '',
        successMsg: ''
    },
    profileUpdate: {
        loading: false,
        errorMsg: '',
        successMsg: ''
    },
}


export let userLogin = createAsyncThunk(
    'user/login',
    async ({ username, password }, thunkApi) => {
        try {
            let response = await loginAPI(username, password)
            return response.data

        } catch (error) {
            let errorMsg = error.response.data?.message
            return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message)
        }
    }
)


export let userSignup = createAsyncThunk(
    'user/signup',
    async ({ username, password }, thunkApi) => {
        try {
            let response = await SignupAPI(username, password)
            return response.data

        } catch (error) {
            let errorMsg = error.response.data?.message
            return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message)
        }
    }
)

export let userProfileUpdate = createAsyncThunk(
    'user/profileUpdate',
    async (profileInformation, thunkApi) => {
        try {
            let response = await profileUpdateAPI(profileInformation)
            return response.data

        } catch (error) {
            let errorMsg = error.response.data?.message
            return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message)
        }
    }
)



let userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetLoginFormStatus: (state) => {
            state.userLogIn.errorMsg = ''
            state.userLogIn.successMsg = ''
            state.userLogIn.loading = false
        },
        resetProfileUpdateFormStatus: (state) => {
            state.profileUpdate.errorMsg = ''
            state.profileUpdate.successMsg = ''
            state.profileUpdate.loading = false
        },
        resetSignupFormStatus: (state) => {
            state.userSignup.errorMsg = ''
            state.userSignup.successMsg = ''
            state.userSignup.loading = false
        },
    },

    extraReducers: (builder) => {



        // sign up reducer
        builder.addCase(userSignup.pending, (state) => {
            state.userSignup.loading = true
            state.userSignup.errorMsg = ''
            state.userSignup.successMsg = ''
        })

        builder.addCase(userSignup.fulfilled, (state, action) => {
            state.userSignup.loading = false
            state.userSignup.errorMsg = ''
            state.userSignup.successMsg = "Sign up Successfully"
        })

        builder.addCase(userSignup.rejected, (state, action) => {
            state.userSignup.loading = false
            state.userSignup.errorMsg = action.payload
            state.userSignup.successMsg = ''
        })

        // log in reducer
        builder.addCase(userLogin.pending, (state) => {
            state.userLogIn.loading = true
            state.userLogIn.errorMsg = ''
            state.userLogIn.successMsg = ''
        })

        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.userLogIn.loading = false
            state.userLogIn.errorMsg = ''
            state.userLogIn.successMsg = "User Logged in Successfully"
        })

        builder.addCase(userLogin.rejected, (state, action) => {
            state.userLogIn.loading = false
            state.userLogIn.errorMsg = action.payload
            state.userLogIn.successMsg = ''
        })

        // profile update reducer
        builder.addCase(userProfileUpdate.pending, (state) => {
            state.profileUpdate.loading = true
            state.profileUpdate.errorMsg = ''
            state.profileUpdate.successMsg = ''
        })

        builder.addCase(userProfileUpdate.fulfilled, (state, action) => {
            state.profileUpdate.loading = false
            state.profileUpdate.errorMsg = ''
            state.profileUpdate.successMsg = 'Profile Update Successfuly'
        })
        builder.addCase(userProfileUpdate.rejected, (state, action) => {
            state.profileUpdate.loading = false
            state.profileUpdate.errorMsg = action.payload
            state.profileUpdate.successMsg = ''
        })
    }
})


let userReducer = userSlice.reducer
export let { resetLoginFormStatus,resetSignupFormStatus, resetProfileUpdateFormStatus } = userSlice.actions

export default userReducer