import { AccountCircle, ArrowBack, SearchRounded } from '@mui/icons-material'
import { Box, Card, InputAdornment, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllergies, fetchDiagnoses, fetchMedicines, fetchVaccines } from '../state/slices/storedLists'

function Add({selectedKey=1}) {

    let storedLists = useSelector(state => state.storedList)
    let dispatch = useDispatch()

    let storedListsIndex = [
        {
            method: fetchAllergies,
            list: storedLists.allergiesList
        },
        {
            method: fetchDiagnoses,
            list: storedLists.diagnosesList
        },
        {
            method: fetchMedicines,
            list: storedLists.medicinesList
        },
        {
            method: fetchVaccines,
            list: storedLists.vaccinesList
        },
    ]

    let searchKeyChangeHandler = (e)=>{
        setSearchKey(e.target.value)
    }

    let [searchKey, setSearchKey] = React.useState('')
    let samples = [
        {
            name: 'Item one name',
            id: 'R043LSFD35'
        },
        {
            name: 'Item one name',
            id: 'R043LSFD35'
        },
        {
            name: 'Item one name',
            id: 'R043LSFD35'
        },
        {
            name: 'Item one name',
            id: 'R043LSFD35'
        },
        {
            name: 'Item one name',
            id: 'R043LSFD35'
        },
    ]

    React.useEffect(() => {
        dispatch(storedListsIndex[selectedKey].method())
    }, [])

    return (
        <Box display={'flex'} justifyContent='center' >
            <Box display='flex' flexDirection='column' width={{ xs: '90vw', md: '60vw' }} >
                <Box display='flex' alignItems='center'>
                    <ArrowBack sx={{ paddingY: 3, paddingRight: 3 }}></ArrowBack>
                    <Typography variant='h6'>Add Screen</Typography>
                </Box>
                <Box width='100%'>
                    <TextField value={searchKey} onChange={searchKeyChangeHandler} fullWidth placeholder='search'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchRounded />
                                </InputAdornment>
                            ),
                        }}
                    ></TextField>
                </Box>

                <Box my={2}>
                    <Card sx={{ boxShadow: '0 0 4px gray' }}>
                        {searchKey.length > 0 && samples.map(sample => {
                        {/* {searchKey.length > 0 && storedListsIndex[selectedKey].list.map(sample => { */}

                            return (
                                <MenuItem>
                                    <Box p={1}>
                                        <Typography variant='h6'>{sample.name}</Typography>
                                        <Typography>{sample.id}</Typography>
                                    </Box>
                                </MenuItem>
                            )
                        })}
                    </Card>
                </Box>

            </Box>
        </Box>
    )
}

export default Add