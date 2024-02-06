import './App.css';
import Home from './components/home/Home';
import { createBrowserRouter,Routes,Route,BrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Details from './components/Details/details';
import MedicineDetials from './components/medicineDetials/medicineDetails';
import FollowUp from './components/FollowUp/followUp';
import Notification from './components/Notification/notification';
import Coupon from './components/coupon/coupon';
import Landing from './components/Landing/Landing';

import React from 'react'
import Header from './components/Header/header';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Details/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/medicine" element={<MedicineDetials/>}/>
      <Route path="/followup" element={<FollowUp/>}/>
      <Route path="/notification" element={<Notification/>}/>
      <Route path="/coupon" element={<Coupon/>}/>
      <Route path="/landing" element={<Landing/>}/>


      </Routes></BrowserRouter>
  )
}

export default App

