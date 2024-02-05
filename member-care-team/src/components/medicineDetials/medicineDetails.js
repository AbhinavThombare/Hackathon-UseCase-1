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

const MedicineDetials = () => {

    const medicineArray = [
        { id: 1, medicineName: 'ABC1', medicineQuantity: '4', Mtaken: '1', Ataken: '0', Ntaken: '1' },
        { id: 2, medicineName: 'ABC2', medicineQuantity: '1', Mtaken: '1', Ataken: '0', Ntaken: '1' },
        { id: 3, medicineName: 'ABC3', medicineQuantity: '5', Mtaken: '1', Ataken: '2', Ntaken: '1' },
        { id: 4, medicineName: 'ABC4', medicineQuantity: '6', Mtaken: '1', Ataken: '1', Ntaken: '1' },
        { id: 5, medicineName: 'ABC5', medicineQuantity: '2', Mtaken: '1', Ataken: '1', Ntaken: '2' },
        { id: 6, medicineName: 'ABC6', medicineQuantity: '3', Mtaken: '2', Ataken: '0', Ntaken: '1' },
    ]

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
                                    <TableCell align="right">Timing</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {medicineArray.map((row, index) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index}</TableCell>
                                        <TableCell align="right">{row.medicineName}</TableCell>
                                        <TableCell align="right">{row.medicineQuantity}</TableCell>
                                        <TableCell align="right">
                                            <div>
                                                <Checkbox checked={true} color={(row.Mtaken === '1' ? 'success' : row.Mtaken==='2'? 'warning':'error')} />
                                                <Checkbox checked={true} color={(row.Ataken === '1' ? 'success' : row.Ataken==='2'? 'warning':'error')} />
                                                <Checkbox checked={true} color={(row.Ntaken === '1' ? 'success' : row.Ntaken==='2'? 'warning':'error')} />
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