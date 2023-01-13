import { AccountCircle, ArrowBack, SearchRounded } from '@mui/icons-material'
import { Box, Card, InputAdornment, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

function Add() {

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

    return (
        <Box display={'flex'} justifyContent='center' >
            <Box display='flex' flexDirection='column' width={{ xs: '90vw', md: '60vw' }} >
                <Box display='flex' alignItems='center'>
                    <ArrowBack sx={{ paddingY: 3, paddingRight: 3 }}></ArrowBack>
                    <Typography variant='h6'>Add Screen</Typography>
                </Box>
                <Box width='100%'>
                    <TextField value={searchKey} onChange={e => setSearchKey(e.target.value)} fullWidth placeholder='search'
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
                        { searchKey.length>0 && samples.map(sample => {
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