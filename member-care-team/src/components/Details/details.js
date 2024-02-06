import React from 'react';
import Header from '../Header/header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import PatientData from '../../patient_data.json'

import './details.css'

const Details = () => {

    return (
        <>
            <Header />
            <div className='details-div'>
                <div className='summary-data-div'>
                    <div className='previous-history'>
                        <p className='previous-history-title'><strong>Previous History</strong></p>
                        <div className='previous-history-data-div'>
                            <div>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 150 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='tableHead'>No.</TableCell>
                                                <TableCell className='tableHead' align="right">Date</TableCell>
                                                <TableCell className='tableHead' align="right">Symptoms</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {PatientData.previousHistory.map((row, index) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                    <TableCell align="right">{row.admitDate}</TableCell>
                                                    <TableCell align="right">{row.diagnosis}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>

                    </div>

                    <div className='discharge-summary'>
                        <p className='discharge-summary-title'><strong>Discharge Summary</strong></p>
                        <div className='discharge-summary-data-div'>
                            <div>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 150 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='tableHead'>No.</TableCell>
                                                <TableCell className='tableHead' align="right">Diagnosis</TableCell>
                                                <TableCell className='tableHead' align="right">Admit Date</TableCell>
                                                <TableCell className='tableHead' align="right">Discharge Date</TableCell>
                                                <TableCell className='tableHead' align="right">Discharge Summary</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {PatientData.dischargeData.map((row, index) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                    <TableCell align="right">{row.diagnosis}</TableCell>
                                                    <TableCell align="right">{row.admitDate}</TableCell>
                                                    <TableCell align="right">{row.dischargeDate}</TableCell>
                                                    <TableCell align="right">{row.dischargeSummary}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='table-data-div'>
                    <div className='medicine-prescribed'>
                        <p className='medicine-prescribed-title'><strong>Medicine Prescribed</strong></p>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className='tableHead'>No.</TableCell>
                                        <TableCell className='tableHead' align="right">Medicine Name</TableCell>
                                        <TableCell className='tableHead' align="right">Units</TableCell>
                                        <TableCell className='tableHead' align="right">Dose (in Day)</TableCell>
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
                                            <TableCell align="right">{row.doseDays}</TableCell>
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
                                        <TableCell className='tableHead'>No.</TableCell>
                                        <TableCell className='tableHead' align="right">Follow Up Date</TableCell>
                                        <TableCell className='tableHead' align="right">Complete/Not-Complete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {PatientData.followupData.map((row, index) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{index + 1}</TableCell>
                                            <TableCell align="right">{row.followupDate}</TableCell>
                                            <TableCell align="right">{(row.completed ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCircleXmark} />)}</TableCell>
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