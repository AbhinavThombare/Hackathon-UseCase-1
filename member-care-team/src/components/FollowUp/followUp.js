import React from 'react';
import Header from '../Header/header';
import './followUp.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import PatientData from '../../patient_data.json'


const FollowUp=()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleActionButton =() => {
        alert('Action Button Clicked')
    }

    return (
        <>
            <Header />
            <div className='medicine-table-div'>
                <div className='medicine-div'>
                    <p className='patient-title' ><strong onClick={handleClick}>{PatientData.name} - {PatientData.patientId}</strong></p>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          Patient Description
        </Box>
      </Popper>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell align="right">FollowUp Date</TableCell>
                                    <TableCell align="right">Completed</TableCell>
                                    <TableCell align="center">Patient Status</TableCell>
                                    <TableCell align="right">Customer Care</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                    


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {PatientData.followupData.map((row, index) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index+1}</TableCell>
                                        <TableCell align="right">{row.followupDate}</TableCell>
                                        <TableCell align="right">
                                            {row.completed?(<FontAwesomeIcon icon={faCheck} />):(<FontAwesomeIcon icon={faCircleXmark} />)}
    
                                        </TableCell>
                                        <TableCell align="center">{row.customerCareInteraction}</TableCell>
                                        <TableCell align="right">{row.CustomerCareNo}</TableCell>
                                        <TableCell align="right"><button className='btn btn-primary' onClick={handleActionButton} >Action Button</button></TableCell>
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
export default FollowUp;