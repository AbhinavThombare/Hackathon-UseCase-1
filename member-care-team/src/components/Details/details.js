import React from 'react';
import Header from '../Header/header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './details.css'

const Details = () => {
    const medicineArray = [
        { id: 1, medicineName: 'ABC1', medicineQuantity: '4' },
        { id: 2, medicineName: 'ABC2', medicineQuantity: '1' },
        { id: 3, medicineName: 'ABC3', medicineQuantity: '5' },
        { id: 4, medicineName: 'ABC4', medicineQuantity: '6' },
        { id: 5, medicineName: 'ABC5', medicineQuantity: '2' },
        { id: 6, medicineName: 'ABC6', medicineQuantity: '3' },
    ]

    const followUpArray = [
        { id: 1, followUpDate: '02-02-2024', completeStatus: 'Complete' },
        { id: 2, followUpDate: '04-02-2024', completeStatus: 'Complete' },
        { id: 3, followUpDate: '06-02-2024', completeStatus: 'Not Complete' },
        { id: 4, followUpDate: '08-02-2024', completeStatus: 'Not Complete' },
    ]

    return (
        <>
            <Header />
            <div className='details-div'>
                <div className='summary-data-div'>
                    <div className='previous-history'>
                        <p  className='previous-history-title'><strong>Previous History</strong></p>
                        <p> <strong>Date: </strong> 02-02-2024</p>
                        <p> <strong>Came for: </strong> ABC</p>
                        <p> <strong>Diagnosis:</strong> ABC</p>
                    </div>

                    <div className='discharge-summary'>
                        <p className='discharge-summary-title'><strong>Discharge Summary</strong></p>
                        <p> <strong>Diagnosis:</strong> Abc</p>
                        <p> <strong>Admit Date:</strong> 02-01-2024</p>
                        <p> <strong>Discharge Date :</strong> 21-01-2024</p>
                        <p> <strong>Discharge Summary: <br/></strong> Minim ut proident eiusmod pariatur enim sunt qui tempor commodo eu. Laboris laborum id commodo ut minim exercitation in sint enim sunt. Do labore voluptate Lorem nisi non voluptate.</p>
                    </div>

                </div>
                <div className='table-data-div'>
                    <div className='medicine-prescribed'>
                        <p className='medicine-prescribed-title'><strong>Medicine Prescribed</strong></p>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No.</TableCell>
                                        <TableCell align="right">Medicine Name</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
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
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <div className='followUp-div'>
                        <p className='followUp-title'><strong>Follow Up Data</strong></p>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No.</TableCell>
                                        <TableCell align="right">Follow Up Date</TableCell>
                                        <TableCell align="right">Complete/Not-Complete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {followUpArray.map((row, index) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{index}</TableCell>
                                            <TableCell align="right">{row.followUpDate}</TableCell>
                                            <TableCell align="right">{row.completeStatus}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>

                <div className='extra-div'>
                    <div className='extra-text-area-1'>
                        <div className='section-1'>

                        </div>
                    </div>

                    <div className='extra-text-area-2'>
                        <div className='section-2'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details;