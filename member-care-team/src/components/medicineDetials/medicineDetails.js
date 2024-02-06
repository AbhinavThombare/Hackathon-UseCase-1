import React, { useState } from 'react';
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
    const [selectedDate,setSelectedDate]=useState(null);
    const handleDateClick=(date)=>{
        setSelectedDate(date);
    };
    
   


   

    return (
        <>
            <Header />
            <div className='date-dropdown'>
               <label htmlFor='dateSelect'>Select a Date: </label>
               <select id='dateSelect' onChange={handleDateClick}>
                <option value="" disabled selected>Select Date</option>
                {PatientData.medicationData.map((date)=>(
                    <option key={date} value={date}>{date.date}</option>
                ))}
               </select>
            </div>
            <div className='medicine-table-div'>
                <div className='medicine-div'>
                    <p className='medicine-title'><strong>Medicine Schedule</strong></p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell className="head">No.</TableCell>
                                    <TableCell className="head" align="right">Medicine Name</TableCell>
                                    <TableCell className="head" align="right">Date</TableCell>
                                    <TableCell className="head"align="right">Mode Of Dose</TableCell>
                                    <TableCell className="head" align="right">Status</TableCell>


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