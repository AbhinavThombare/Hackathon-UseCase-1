import React from 'react';
import Header from '../Header/header';
import './medicineDetials.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import PatientData from '../../patient_data.json'


const MedicineDetials = () => {

    return (
        <>
            <Header />
            <div className='medicine-table-div'>
                <div className='medicine-div'>
                    <p className='medicine-title'><strong>Given Medicine</strong></p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell align="right">Medicine Name</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Mode Of Dose</TableCell>
                                    <TableCell align="right">Timing</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {PatientData.medicationData.map((row, index) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="right">{row.medicationName}</TableCell>
                                        <TableCell align="right">{row.totalUnits}</TableCell>
                                        <TableCell align="right">{row.modeOfDose}</TableCell>
                                        <TableCell align="right">
                                            <div>
                                                <Checkbox checked={true} color={(row.takenDose[0].Mtaken === '1' ? 'success' : row.takenDose[0].Mtaken === '2' ? 'warning' : 'error')} disabled={(row.takenDose[0].Mtaken === '-1' ? true : false)} />
                                                <Checkbox checked={true} color={(row.takenDose[1].Ataken === '1' ? 'success' : row.takenDose[1].Ataken === '2' ? 'warning' : 'error')} disabled={(row.takenDose[1].Ataken === '-1' ? true : false)}/>
                                                <Checkbox checked={true} color={(row.takenDose[2].Ntaken === '1' ? 'success' : row.takenDose[2].Ntaken === '2' ? 'warning' : 'error')} disabled={(row.takenDose[2].Ntaken === '-1' ? true : false)}/>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

        </>
    )
}

export default MedicineDetials;