import { AccountCircle, ArrowBack, SearchRounded } from '@mui/icons-material'
import { Alert, Box, Card, CircularProgress, InputAdornment, MenuItem, Modal, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addAllergy, fetchAllergies, resetAllAllegyStatus } from '../state/slices/allergy'
import { addDiagnoses, fetchDiagnoses, resetAllDiagnosesStatus } from '../state/slices/diagnoses'
import { addMedicine, fetchMedicines, resetAllMedicineStatus } from '../state/slices/medicine'
import { addVaccine, fetchVaccines, resetAllVaccineStatus } from '../state/slices/vaccine'
// import { addAllergy, addDiagnoses, addMedicine, addVaccine, fetchAllergies, fetchDiagnoses, fetchMedicines, fetchVaccines, resetStoredLists } from '../state/slices/storedLists'

function Add({ selectedKey = 1 }) {

    let storedLists = useSelector(state => state.storedList)
    let allergy = useSelector(state => state.allergy)
    let vaccine = useSelector(state => state.vaccine)
    let diagnoses = useSelector(state => state.diagnoses)
    let medicine = useSelector(state => state.medicine)

    let dispatch = useDispatch()
    // let navigate = useNavigate()
    let navigate = ''

    let storedListsIndex = [
        {
            fetch: fetchAllergies,
            add: addAllergy,
            list: allergy.allergiesList,
            reset: resetAllAllegyStatus,
            idName: 'id'
        },
        {
            fetch: fetchDiagnoses,
            add: addDiagnoses,
            list: diagnoses.diagnosesList,
            reset: resetAllDiagnosesStatus,
            idName: 'diagnosesId'

        },
        {
            fetch: fetchMedicines,
            add: addMedicine,
            list: medicine.medicinesList,
            reset: resetAllMedicineStatus,
            idName: 'medicineId'

        },
        {
            fetch: fetchVaccines,
            add: addVaccine,
            list: vaccine.vaccinesList,
            reset: resetAllVaccineStatus,
            idName: 'vaccineId'
        },
    ]

    let searchKeyChangeHandler = (e) => {
        setSearchKey(e.target.value)
        dispatch(storedListsIndex[selectedKey].fetch({ name: e.target.value }))
    }

    let addHandler = (itemId) => {
        setShowModal(true)
        dispatch(storedListsIndex[selectedKey].add(itemId))
    }

    let [searchKey, setSearchKey] = React.useState('')
    let [showModal, setShowModal] = React.useState(false)

    let handleModalClose = () => {
        navigate('/')
    }

    React.useEffect(() => {
        storedListsIndex[selectedKey].reset()
    }, [])
    let loading = vaccine.loading || medicine.loading || diagnoses.loading || allergy.loading
    let errorMsg = vaccine.errorMsg || medicine.errorMsg || diagnoses.errorMsg || allergy.errorMsg

    return (
        <Box display={'flex'} justifyContent='center' >

            <Modal
                open={(loading || errorMsg) && showModal}
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
                    {errorMsg && <Alert severity='error'>{errorMsg}</Alert>}
                    {loading && <CircularProgress color='primary' />}
                </Box>
            </Modal>

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
                    {searchKey.length > 0 && <Card sx={{ boxShadow: '0 0 4px gray' }}>
                        {loading &&
                            <Box display={'flex'} justifyContent='center' p={3}>
                                <CircularProgress></CircularProgress>
                            </Box>
                        }

                        {(searchKey.length > 0 && storedListsIndex[selectedKey].list.length > 0)
                            ? storedListsIndex[selectedKey].list.map(item => {
                                return (
                                    <MenuItem onClick={() => addHandler(item[storedListsIndex[selectedKey].idName])}>
                                        <Box p={1}>
                                            <Typography variant='h6'>{item.name}</Typography>
                                            <Typography>{item[storedListsIndex[selectedKey].idName]}</Typography>
                                        </Box>
                                    </MenuItem>
                                )
                            })
                            : searchKey.length > 0 && !loading
                                ? <Box display={'flex'} justifyContent='center' p={3}>
                                    <Typography>No Match Found!</Typography>
                                </Box> : <></>
                        }
                    </Card>
                    }
                </Box>

            </Box>
        </Box>
    )
}

export default Add