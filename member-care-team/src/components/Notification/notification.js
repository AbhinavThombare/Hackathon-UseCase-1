import React from 'react';
import './notification.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../Header/header';

const Notification = () => {

    const notificationArray = [
        { email: 'jay07@gmail.com', supervisiorPhoneCall: '8877887789-Abhishek', feedBackCall: '8765679089', followUpCall: '8789987899' },
    ];

    const handleClick = () => {
        alert('Remainder Send')
    }

    return (
        <>
            <Header />
            <div className='notification-table-div'>
                <div className='medicine-div'>
                    <p className='medicine-title'><strong>Remider / Notifications</strong></p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.No.</TableCell>
                                    <TableCell align="right">Dates</TableCell>
                                    <TableCell align="right">Supervisor Name</TableCell>
                                    <TableCell align="center">Purpose</TableCell>
                                    <TableCell align="right">Notification Type</TableCell>
                                    <TableCell align="right">Status</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {notificationArray.map((row, index) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="right">2024-02-10</TableCell>
                                        <TableCell align="right">Abhinav</TableCell>
                                        <TableCell align="right">
                                            <p>Medicine Remainder</p>
                                            {/* <TableCell align="right">Morning Remainder  <br/> <button className='btn btn-success' onClick={handleClick}>Remainder Send</button></TableCell>
                                            <TableCell align="right">Afternoon Remainder <br/> <button className='btn btn-success' onClick={handleClick}>Remainder Send</button></TableCell>
                                            <TableCell align="right">Night Remainder <br/> <button className='btn btn-success' onClick={handleClick}>Remainder Send</button></TableCell> */}
                                        </TableCell>
                                        <TableCell align="right">SMS <br/> Notification <br/>Phone Call </TableCell>
                                        <TableCell align="right">checkbox </TableCell>

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

export default Notification;