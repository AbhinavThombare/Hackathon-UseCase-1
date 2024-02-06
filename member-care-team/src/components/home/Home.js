import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBell, faCalendarDays, faCircleInfo, faCircleUser, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPills } from '@fortawesome/free-solid-svg-icons';
import PatientData from '../../patient_data.json'


import './home.css'
import Header from '../Header/header';

const Home = () => {

    return (
        <>
            <Header />

            {/* <div class="main-heading">
                <div class="left-heading">
                    <div class="elementor-widget-container">
                        <h1 class="elementor-heading-title elementor-size-default">
                            Optum Network makes it easier to succeed with
                            <span>value-based</span>
                            care
                        </h1>
                    </div>
                </div>

                <div class="right-heading">
                    Right
                </div>
            </div> */}
        </>


    )
}

export default Home;