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
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import PatientData from '../../patient_data.json'
import { Checkbox } from '@mui/material';


const FollowUp = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    return (
        <>
            <div className='medicine-table-div'>
                <div className='medicine-div'>
                    <p className='follow-up-title'><strong>Follow Up</strong></p>
                    <p className='patient-title' ><strong onClick={handleClick}>{PatientData.name}</strong></p>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                            Patient Description
                        </Box>
                    </Popper>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell className="head">S.No.</TableCell>
                                    <TableCell className="head" align="center">FollowUp Date</TableCell>
                                    <TableCell className="head" align="center">Patient Condition</TableCell>
                                    <TableCell className="head" align="center">Supervisor Name</TableCell>
                                    <TableCell className="head" align="center">Status</TableCell>




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

                                        <TableCell align="center" className='patient-status'>{row.customerCareInteraction}</TableCell>
                                        <TableCell align="center">John</TableCell>
                                        <TableCell align="center">
                                            <div>
                                                <Checkbox sx={{
                                                    color: "#2e7d32",
                                                    '&.Mui-checked': {
                                                        color: "#2e7d32",
                                                    },
                                                }} />
                                                <Checkbox sx={{
                                                    color: "#ed6c02",
                                                    '&.Mui-checked': {
                                                        color: "#ed6c02",
                                                    },
                                                }} />
                                                <Checkbox sx={{
                                                    color: "#d32f2f",
                                                    '&.Mui-checked': {
                                                        color: "#d32f2f",
                                                    },
                                                }}  />

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
export default FollowUp;