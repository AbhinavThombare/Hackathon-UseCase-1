import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBell, faCalendarDays, faChartPie, faCircleInfo, faCircleUser, faFileMedical, faTicket } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import PatientData from '../../patient_data.json';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';
import medicalSummaryIcon from '../../assests/icon/medical-history.png'

import './header.css';

const Header = ({t}) => {
    const [highlight, setHighlight] = useState(true);

    const navigate = useNavigate();

    const handleHighlight = (item) => {
        setHighlight(item)
        console.log(item)
    }
    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate('/');
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }


    return (
        <div className='header-div'>
            <div className='patient-id-div'>
                {/* <div>
                    <button onClick={() => changeLanguage('es')}>Spanish</button>
                    <button onClick={() => changeLanguage('en')}>English</button>
                </div> */}
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
                                <NavLink className={highlight === true ? 'nav-link active' : 'nav-link active1'} to='/' onClick={() => handleHighlight(true)}><span className='icon-tab'><FontAwesomeIcon icon={faChartPie} /></span><br />Dashboard - AI Analysis</NavLink>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/detials' onClick={() => handleHighlight(false)}><span className='icon-tab'><img src={medicalSummaryIcon} alt="" /></span><br />{t('medicalSummary')}</NavLink>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/followup' onClick={() => handleHighlight(false)}><span className='icon-tab'><FontAwesomeIcon icon={faCalendarDays} /></span><br />{t('followUp')}</NavLink>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/medicine' onClick={() => handleHighlight(false)}><span className='icon-tab'><FontAwesomeIcon icon={faPills} /></span><br />{t('medicineSchedule')}</NavLink>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/notification' onClick={() => handleHighlight(false)}><span className='icon-tab'><FontAwesomeIcon icon={faBell} /></span><br />{t('reminderNotification')}</NavLink>
                            </li>
                            <span className='vl'></span>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='/coupon' onClick={() => handleHighlight(false)}><span className='icon-tab'><FontAwesomeIcon icon={faTicket} /></span><br />{t('couponsDetails')}</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withNamespaces()(Header);