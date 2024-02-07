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
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import PatientData from '../../patient_data.json'

const Notification = () => {
    const handleClick = () => {
        alert('Remainder Send')
    }

    return (
        <>
            <div className='notification-table-div'>
                <div className='medicine-div'>
                    <p className='medicine-title'><strong>Reminder / Notifications</strong></p>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.No.</TableCell>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Supervisor Name</TableCell>
                                    <TableCell align="center">Purpose</TableCell>
                                    <TableCell align="center">Notification Type</TableCell>
                                    <TableCell align="center">Feedback Call</TableCell>
                                    <TableCell align="center">Status</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {PatientData.NotificationData.map((row, index) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="center">{row.Dates}</TableCell>
                                        <TableCell align="center">{row.SupervisiorName}</TableCell>
                                        <TableCell align="center">{row.Purpose}</TableCell>
                                        <TableCell align="center">
                                            <CallIcon className='icon-style'   onClick={handleClick} /><br/>
                                            <br/> <MessageIcon className='icon-style'   onClick={handleClick} /> <br/>
                                            <br/> <NotificationsActiveIcon className='icon-style'   onClick={handleClick} />
                                        </TableCell>
                                        <TableCell align="center">{row.FeedbackCall}</TableCell>
                                        <TableCell align="center"> {row.check ?<CheckBoxIcon className='check-box-style'/>: <CancelIcon className="cancel-icon-style"/>}</TableCell>

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