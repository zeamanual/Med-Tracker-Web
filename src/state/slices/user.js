import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginAPI } from "../../service/user"

let initialState = {
    loading: false,
    userLogIn: {
        loading: false,
        errorMsg: '',
        successMsg: ''
    }
}


export let userLogin = createAsyncThunk(
    'user/login',
    async ({ username, password}, thunkApi) => {
        try {
            let response = await loginAPI(username,password)
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
        resetLoginFormStatus:(state)=>{
            state.userLogIn.errorMsg=''
            state.userLogIn.successMsg=''
            state.userLogIn.loading=false
        }
    },

    extraReducers: (builder) => {
        // log in reducer
        builder.addCase(userLogin.pending, (state)=>{
            state.userLogIn.loading=true
            state.userLogIn.errorMsg=''
            state.userLogIn.successMsg=''
        })

        builder.addCase(userLogin.fulfilled, (state,action)=>{
            state.userLogIn.loading=false
            state.userLogIn.errorMsg=''
            state.userLogIn.successMsg="User Loggedin Successfully"
        })

        builder.addCase(userLogin.rejected, (state,action)=>{
            state.userLogIn.loading=false
            state.userLogIn.errorMsg=action.payload
            state.userLogIn.successMsg=''
        })
    }
})


let userReducer = userSlice.reducer
export let {resetLoginFormStatus} = userSlice.actions

export default userReducer