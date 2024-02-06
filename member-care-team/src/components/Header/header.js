import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBell, faCalendarDays, faCircleInfo, faCircleUser, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import PatientData from '../../patient_data.json'


import './header.css'

const Header = () => {

    const [highlight, setHighlight] = useState('medicineSummary');
   
    const handleHighlight = (item) => {
        setHighlight(item)
        console.log(item)
    }

    return (
        <div className='header-div'>
            <div className='patient-id-div'>
                <div className='logo-img'>
                    <img src="https://www.optum.com/content/dam/optum4/images/logos/optum-logo-ora-rgb1.svg" alt="logo" />
                </div>
                <div className='patient-id-div-title'>
                    <p className='pateint-id-title'> <span className='icon-tab user-icon'><FontAwesomeIcon icon={faCircleUser} /></span> <span>{PatientData.name}</span></p>
                </div>
            </div>
            <hr />
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className={highlight === 'medicleSummary' ? 'nav-link active' : 'nav-link'} to='/detials' onClick={() => handleHighlight('medicleSummary')}><span className='icon-tab'><FontAwesomeIcon icon={faAddressBook} /></span><br /> Medical Summary</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className={highlight === 'followup' ? 'nav-link active' : 'nav-link'} to='/followup' onClick={() => handleHighlight('followup')}><span className='icon-tab'><FontAwesomeIcon icon={faCalendarDays} /></span><br />Follow Up</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className={highlight === 'medicine' ? 'nav-link active' : 'nav-link'} to='/medicine' onClick={() => handleHighlight('medicine')}><span className='icon-tab'><FontAwesomeIcon icon={faPills} /></span><br />Medicine Schedule</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className={highlight === 'notification' ? 'nav-link active' : 'nav-link'} to='/notification' onClick={() => handleHighlight('notification')}><span className='icon-tab'><FontAwesomeIcon icon={faBell} /></span><br />Remainder / Notification</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className={highlight === 'coupon' ? 'nav-link active' : 'nav-link'} to='/coupon' onClick={() => handleHighlight('coupon')}><span className='icon-tab'><FontAwesomeIcon icon={faTicket} /></span><br />Coupons - Offers/Promo Code</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className={highlight === 'dashboard' ? 'nav-link active' : 'nav-link'} to='#' onClick={() => handleHighlight('dashboard')}><span className='icon-tab'><FontAwesomeIcon icon={faTicket} /></span><br />Dashboard - Overall Satisfication</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;