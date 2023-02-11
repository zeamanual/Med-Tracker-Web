import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { vaccinesListAPI, allergiesListAPI, diagnosesListAPI,medicinesListAPI } from "../../service/lists"

let initialState = {
    loading: false,
    successMsg:'',
    errorMsg:'',
    allergiesList:[],
    diagnosesList:[],
    medicinesList:[],
    vaccinesList:[]

}


export let fetchAllergies = createAsyncThunk(
    'list/allergies',
    async (_='', thunkApi) => {
        try {
            let response = await allergiesListAPI()
            return response.data

        } catch (error) {
            let errorMsg = error.response.data?.message
            return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message)
        }
    }
)
export let fetchDiagnoses = createAsyncThunk(
    'list/diagnosis',
    async (_='', thunkApi) => {
        try {
            let response = await diagnosesListAPI()
            return response.data

        } catch (error) {
            let errorMsg = error.response.data?.message
            return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message)
        }
    }
)
export let fetchVaccines = createAsyncThunk(
    'list/vaccines',
    async (_='', thunkApi) => {
        try {
            let response = await vaccinesListAPI()
            return response.data

        } catch (error) {
            let errorMsg = error.response.data?.message
            return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message)
        }
    }
)
export let fetchMedicines = createAsyncThunk(
    'list/medicines',
    async (_='', thunkApi) => {
        try {
            let response = await medicinesListAPI()
            return response.data

        } catch (error) {
            let errorMsg = error.response.data?.message
            return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message)
        }
    }
)





let storedListSlice = createSlice({
    name: 'storedList',
    initialState,
    reducers: {
        resetStoredLists: (state) => {
            state.errorMsg = ''
            state.successMsg = ''
            state.loading = false
            state.allergiesList=[]
            state.diagnosesList=[]
            state.medicinesList=[]
            state.vaccinesList=[]
        },
    },

    extraReducers: (builder) => {

        // vaccines list fetch reducer
        builder.addCase(fetchVaccines.pending, (state) => {
            state.loading = true
            state.errorMsg = ''
            state.successMsg = ''
            state.vaccinesList=[]
        })

        builder.addCase(fetchVaccines.fulfilled, (state, action) => {
            state.loading = false
            state.errorMsg = ''
            state.successMsg = 'Vaccines Fetched'
            state.vaccinesList=action.payload
        })

        builder.addCase(fetchVaccines.rejected, (state, action) => {
            state.loading = false
            state.errorMsg = action.payload
            state.successMsg =''
            state.vaccinesList=[]
        })

        // allergies list fetch reducer
        builder.addCase(fetchAllergies.pending, (state) => {
            state.loading = true
            state.errorMsg = ''
            state.successMsg = ''
            state.allergiesList=[]
        })

        builder.addCase(fetchAllergies.fulfilled, (state, action) => {
            state.loading = false
            state.errorMsg = ''
            state.successMsg = 'Allergies Fetched'
            state.allergiesList=action.payload
        })

        builder.addCase(fetchAllergies.rejected, (state, action) => {
            state.loading = false
            state.errorMsg = action.payload
            state.successMsg = ''
            state.allergiesList=[]
        })


        // medicines list fetch reducer
        builder.addCase(fetchMedicines.pending, (state) => {
            state.loading = true
            state.errorMsg = ''
            state.successMsg = ''
            state.medicinesList=[]
        })

        builder.addCase(fetchMedicines.fulfilled, (state, action) => {
            state.loading = false
            state.errorMsg = ''
            state.successMsg = 'medicines Fetched'
            state.medicinesList=action.payload
        })

        builder.addCase(fetchMedicines.rejected, (state, action) => {
            state.loading = false
            state.errorMsg = action.payload
            state.successMsg =''
            state.medicinesList=[]
        })

        // diagnoses list fetch reducer
        builder.addCase(fetchDiagnoses.pending, (state) => {
            state.loading = true
            state.errorMsg = ''
            state.successMsg = ''
            state.diagnosesList=[]
        })

        builder.addCase(fetchDiagnoses.fulfilled, (state, action) => {
            state.loading = false
            state.errorMsg = ''
            state.successMsg = 'Dignosis Fetched'
            state.diagnosesList=action.payload
        })

        builder.addCase(fetchDiagnoses.rejected, (state, action) => {
            state.loading = false
            state.errorMsg = action.payload
            state.successMsg = ''
            state.diagnosesList=[]
        })

    }
})


let sotredListReducer = storedListSlice.reducer
export let { resetStoredLists } = storedListSlice.actions

export default sotredListReducer