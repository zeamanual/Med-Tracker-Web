import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { persistAuth, removeAuth } from "../../helpers/authPersistence"
import { getProfileAPI, loginAPI, profileUpdateAPI, SignupAPI } from "../../service/user"

let initialState = {
    loading: false,
    token: localStorage.getItem('token') || '',
    userId: localStorage.getItem('userId') || '',
    fullName: localStorage.getItem('fullName') || '',
    email: localStorage.getItem('email') || '',
    allergies: [],
    medicines: [],
    diagnoses: [],
    vaccines: [],
    documents: [],
    currentUserObjectRaw: '',
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
    getProfile: {
        loading: false,
        errorMsg: '',
        successMsg: '',
        profileObj:''
    }
}


export let userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }, thunkApi) => {
        try {
            let response = await loginAPI(email, password)
            return response.data

        } catch (error) {
            let errorMsg = error?.response?.data
            return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message)
        }
    }
)


export let userSignup = createAsyncThunk(
    'user/signup',
    async ({ firstName, lastName, email, password }, thunkApi) => {
        try {
            let response = await SignupAPI(firstName, lastName, email, password)
            return response.data

        } catch (error) {
            let errorMsg = error.response.data?.message
            return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message)
        }
    }
)

export let getProfile = createAsyncThunk(
    'user/getProfile',
    async (_ = '', thunkApi) => {
        try {
            console.log('before running***')
            let response = await getProfileAPI()
            console.log('after running***',response)

            return response.data

        } catch (error) {
            console.log('error running***',error)

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
        resetGetProfileStatus: (state) => {
            state.getProfile.errorMsg = ''
            state.getProfile.successMsg = ''
            state.getProfile.loading = false
        },
        resetSignupFormStatus: (state) => {
            state.userSignup.errorMsg = ''
            state.userSignup.successMsg = ''
            state.userSignup.loading = false
        },
        logout: (state) => {
            removeAuth()
            state.allergies = []
            state.diagnoses = []
            state.documents = []
            state.vaccines = []
            state.medicines = []
            state.email = ''
            state.fullName = ''
            state.userId = ''
            state.currentUserObjectRaw = ''
            state.token = ''
        }
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
            state.currentUserObjectRaw = action.payload.user
            state.token = action.payload.token
            state.allergies = action.payload.user.allergies
            state.vaccines = action.payload.user.vaccines
            state.diagnoses = action.payload.user.diagnoses
            state.medicines = action.payload.user.medicines
            state.documents = action.payload.user.documents
            state.email = action.payload.user.email
            state.fullName = action.payload.user.fullName
            state.userLogIn.errorMsg = ''
            state.userId = action.payload.user.userId
            persistAuth({ token: state.token, userId: state.userId, email: state.email, fullName: state.fullName })
            state.userLogIn.successMsg = "User Logged in Successfully"
        })

        builder.addCase(userLogin.rejected, (state, action) => {
            console.log('log in faillded', action)
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

        // get profile data reducer
        builder.addCase(getProfile.pending, (state) => {
            state.getProfile.loading = true
            state.getProfile.errorMsg = ''
            state.getProfile.successMsg = ''
        })

        builder.addCase(getProfile.fulfilled, (state, action) => {
            console.log('profile fetched succwe',action)
            state.getProfile.loading = false
            state.getProfile.errorMsg = ''
            state.getProfile.successMsg = 'Profile Fetched Successfuly'
            state.getProfile.profileObj=action.payload
        })
        builder.addCase(getProfile.rejected, (state, action) => {
            state.getProfile.loading = false
            state.getProfile.errorMsg = action.payload
            state.getProfile.successMsg = ''
        })
    }
})


let userReducer = userSlice.reducer
export let { resetLoginFormStatus, logout, resetGetProfileStatus, resetSignupFormStatus, resetProfileUpdateFormStatus } = userSlice.actions

export default userReducer