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
                                                <TableCell className='tableHead'>S.No</TableCell>
                                                <TableCell className='tableHead' align='right'> Department</TableCell>
                                                <TableCell className='tableHead' align='right'> Doctor</TableCell>
                                                <TableCell className='tableHead' align="right">Appointment Date</TableCell>
                                                <TableCell className='tableHead' align="right">Symptoms</TableCell>
                                                <TableCell className='tableHead' align="right">Details</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {PatientData.previousHistory.map((row, index) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                    <TableCell align="right">{row.department}</TableCell>
                                                    <TableCell align="right">{row.doctor}</TableCell>
                                                    <TableCell align="right">{row.admitDate}</TableCell>
                                                    <TableCell align="right">{row.diagnosis}</TableCell>
                                                    <TableCell align="right"><a href="#">View Summary</a></TableCell>
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
                        <div className='discharge-summary-data-div'>
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
                                                <TableCell className='tableHead'>S.No.</TableCell>
                                                <TableCell className='tableHead' align='right'>Diagnosis</TableCell>
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
                                                    <TableCell>{row.diagnosis}</TableCell>
                                                    <TableCell align="right">{row.admitDate}</TableCell>
                                                    <TableCell align="right">{row.dischargeDate}</TableCell>
                                                    <TableCell>{row.dischargeSummary}</TableCell>
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
                                                <TableCell className='tableHead' align="right">Admission Date</TableCell>
                                                <TableCell className='tableHead' align="right">Discharge Date</TableCell>
                                                <TableCell className='tableHead' align='right'>Initial Complaint</TableCell>
                                                
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {PatientData.dischargeData.map((row, index) => (
                                                <TableRow
                                                    key={row.id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                                                    <TableCell>{row.diagnosis}</TableCell>
                                                    <TableCell align="right">{row.admitDate}</TableCell>
                                                    <TableCell align="right">{row.dischargeDate}</TableCell>
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
                            <p>Patient underwent successful appendectomy. Recovery is expected to be smooth with prescribed antibiotics.</p>
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
                                        <TableCell className='tableHead' align="right">Medicine Name</TableCell>
                                        <TableCell className='tableHead' align="right">Units</TableCell>
                                        <TableCell className='tableHead' align="right">Days</TableCell>
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
                                        <TableCell className='tableHead'>S.No.</TableCell>
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

                
                    </div>

                    <div className='extra-text-area-2'>
                        <div className='section-2'>

                        </div>
                    </div>
                
                
            
        </>
    )
}

export default Details;