import React from 'react';
import Header from '../Header/header';
import './coupon.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import patientData from'../../patient_data.json'

const Coupon = () => {

    const handleRedeem = () => {
        alert('Coupon is redeem')
    }

    return (
        <>
            <Header />
            <div className='coupon-layout'>
                
                <div className='coupon-div'>
                <div className='medicine-prescribed'>
                        <p className='medicine-prescribed-title'><strong>Coupons - Offers / Promo Code </strong></p>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className='tableHead'>Test Name</TableCell>
                                        <TableCell className='tableHead' align="right">Offer / Promo Code</TableCell>
                                        <TableCell className='tableHead' align="right">Discount</TableCell>
                                        <TableCell className='tableHead' align="right">Action</TableCell>
                                        <TableCell className='tableHead' align="right">Eligibility</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {patientData.Coupons.map((row, index) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{row.testName}</TableCell>
                                            <TableCell align="right">{row.offer}</TableCell>
                                            <TableCell align="right">{row.discount}%</TableCell>
                                            <TableCell align="right"><button className='btn btn-success' onClick={handleRedeem}>Redeem</button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Coupon;