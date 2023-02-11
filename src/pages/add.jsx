import { AccountCircle, SearchRounded } from '@mui/icons-material'
import { useLocation,Link } from 'react-router-dom';
import { ArrowBack, Expand, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Card, InputAdornment, MenuItem, Stack, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllergies, fetchDiagnoses, fetchMedicines, fetchVaccines } from '../state/slices/storedLists'

function Add() {
    const location = useLocation()
    const { id } = location.state
    let selectedKey = id

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
                <Box py={2} display='flex' alignItems='center'>
                    <Link to={-1}> <ArrowBack  /> </Link>
                    <Typography sx={{paddingLeft:"1em"}} variant='h6'>Add Screen</Typography>
                </Box>
                <Box bgcolor={"white"} width='100%'>
                    
                    <TextField value={searchKey}  onChange={searchKeyChangeHandler} fullWidth placeholder='search'
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