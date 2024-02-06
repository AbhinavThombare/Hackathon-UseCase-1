import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBell, faCalendarDays, faCircleInfo, faCircleUser, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import PatientData from '../../patient_data.json'


import './header.css'

const Header = () => {

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
                                <Link className='nav-link' to='/detials'><span className='icon-tab'><FontAwesomeIcon icon={faAddressBook} /></span><br /> Medical Summary</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className='nav-link' to='/followup'><span className='icon-tab'><FontAwesomeIcon icon={faCalendarDays} /></span><br />Follow Up</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className='nav-link' to='/medicine'><span className='icon-tab'><FontAwesomeIcon icon={faPills} /></span><br />Medicine Schedule</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className='nav-link' to='/notification'><span className='icon-tab'><FontAwesomeIcon icon={faBell} /></span><br />Reminder / Notification</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className='nav-link' to='/coupon'><span className='icon-tab'><FontAwesomeIcon icon={faTicket} /></span><br />Coupons - Offers/Promo Code</Link>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <Link className='nav-link' to='/landing'><span className='icon-tab'><FontAwesomeIcon icon={faTicket} /></span><br />Dashboard - Overall Satisfaction</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;