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
import PieChartWithCustomizedLabel from '../Landing/Piechart/piechart';

const Details = () => {

    return (
        <>
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
                                                <TableCell className='tableHead'>S.No</TableCell>
                                                <TableCell className='tableHead' align='center'> Department</TableCell>
                                                <TableCell className='tableHead' align='center'> Doctor</TableCell>
                                                <TableCell className='tableHead' align="center">Appointment Date</TableCell>
                                                <TableCell className='tableHead' align="center">Symptoms</TableCell>
                                                <TableCell className='tableHead' align="center">Details</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {PatientData.previousHistory.map((row, index) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                    <TableCell align="center">{row.department}</TableCell>
                                                    <TableCell align="center">{row.doctor}</TableCell>
                                                    <TableCell align="center">{row.admitDate}</TableCell>
                                                    <TableCell align="center">{row.diagnosis}</TableCell>
                                                    <TableCell align="center"><a href="#">View Summary</a></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>

                    </div>

                    <div className='discharge-summary'>
                        <p className='discharge-summary-title'><strong>Patient Condition before Admission</strong></p>
                        <div className='patient-Condition-div'>
                            <p>{PatientData.patientSummaryBeforeAdmission}</p>
                        </div>

                    </div>

                    <div className='discharge-summary'>
                        <p className='discharge-summary-title'><strong>Diagnosis Details</strong></p>
                        <div className='discharge-summary-data-div'>
                            <div>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 150 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='tableHead' width="10%">S.No.</TableCell>
                                                <TableCell className='tableHead' align='center' width="20%">Problem</TableCell>
                                                <TableCell className='tableHead' align="center" width="70%">Problem Summary</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {PatientData.dischargeData.map((row, index) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                    <TableCell align='center'>{row.diagnosis}</TableCell>
                                                    <TableCell>{row.problemSummary}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>

                    <div className='discharge-summary'>
                        <p className='discharge-summary-title'><strong>Patient Summary</strong></p>
                        <div className='discharge-summary-data-div'>
                            <div>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 150 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='tableHead'>Patient Name</TableCell>
                                                <TableCell className='tableHead' align="center">Diagnosis</TableCell>
                                                <TableCell className='tableHead' align="center">Discharge Date</TableCell>
                                                <TableCell className='tableHead' align='center'>Initial Complaint</TableCell>
                                                
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {PatientData.dischargeData.map((row, index) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                    <TableCell align="center">{row.diagnosis}</TableCell>
                                                    <TableCell align="center">{row.admitDate}</TableCell>
                                                    <TableCell align="center">{row.initalComplaint}</TableCell>
                                                    {/* <TableCell>Abhianv</TableCell> */}
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
                            <p>{PatientData.dischargeData[0].dischargeSummary}</p>
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
                                        <TableCell className='tableHead'>S.No.</TableCell>
                                        <TableCell className='tableHead' align="center">Medicine Name</TableCell>
                                        <TableCell className='tableHead' align="center">Units</TableCell>
                                        <TableCell className='tableHead' align="center">Days</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {PatientData.medicationData.map((row, index) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{index + 1}</TableCell>
                                            <TableCell align="center">{row.medicationName}</TableCell>
                                            <TableCell align="center">{row.totalUnits}</TableCell>
                                            <TableCell align="center">{row.doseDays}</TableCell>
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
                                        <TableCell className='tableHead'>S.No.</TableCell>
                                        <TableCell className='tableHead' align="center">Follow Up Date</TableCell>
                                        <TableCell className='tableHead' align="center">Complete/Not-Complete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {PatientData.followupData.map((row, index) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{index + 1}</TableCell>
                                            <TableCell align="center">{row.followupDate}</TableCell>
                                            <TableCell align="center">{(row.completed ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCircleXmark} />)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>

                
                    </div>

                    <div className='extra-text-area-2'>
                        <div className='section-2'>

                        </div>
                    </div>
                
                
            
        </>
    )
}

export default Details;