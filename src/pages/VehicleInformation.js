
import React from 'react';

import '../Stylesheets/header/header.css';

import '../Stylesheets/layout/centre.css';
import {useLocation} from "react-router-dom";
import Header from '../components/header'
import BlueLine from '../components/blueline'
import BackButton from '../components/backbutton';
import VehicleDetails from '../components/vehicledetails';
import Footer from '../components/footer';
import LongBlueLine from "../components/longblue";
import Reminder from "../components/reminder";

export default function VehicleInformation() {

    const location = useLocation();
    const state = location.state;
    console.log(state.color);

    return (
        <div className="App">
            <Header />
            <BlueLine />
            <BackButton/>
            <Reminder />
            <VehicleDetails state={state} />
            <LongBlueLine />
            <Footer />
        </div>

    )
}