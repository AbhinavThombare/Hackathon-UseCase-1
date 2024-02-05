import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PatientData from '../../patient_data.json'


import './header.css'

const Header = () => {

    return (
        <div className='header-div'>
            <div className='patient-id-div'>
                <div className='patient-id-div-title'>
                    <p className='pateint-id-title'> <span><FontAwesomeIcon icon={faUser} /></span>{PatientData.patientId} <span>{PatientData.name}</span></p>
                </div>
            </div>
            <hr/>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className='nav-link' to='/detials'><span><FontAwesomeIcon icon={faCircleInfo} /></span><br/> Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/followup'><span><FontAwesomeIcon icon={faCircleInfo} /></span><br/>Follow Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/medicine'><span><FontAwesomeIcon icon={faCircleInfo} /></span><br/>Medicine</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/notification'><span><FontAwesomeIcon icon={faCircleInfo} /></span><br/>Notification</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;