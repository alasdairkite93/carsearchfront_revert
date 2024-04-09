import '../Stylesheets/header/header.css';
import React from "react";
import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';
import Header from '../components/header'
import BlueLine from '../components/blueline'
import BackButton from '../components/backbutton';
import '../Stylesheets/challenge.css';
import VehicleDetails from '../components/vehicledetails';
import Footer from '../components/footer';
import LongBlueLine from "../components/longblue";
import '../Stylesheets/pay.css';
import { Link } from 'react-router-dom';

export default function reminder() {

    return (
        <div className="App">
            <div className="middle-element">
                <div className="two">
                    <Link to={"/reminder"}>Get a Reminder</Link>
                </div>
            </div>
        </div>

    )
};