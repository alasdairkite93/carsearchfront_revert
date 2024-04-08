import '../Stylesheets/header/header.css';
import React from "react";
import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';
import Header from '../components/header'
import BlueLine from '../components/blueline'
import BackButton from '../components/backbutton';
import VehicleDetails from '../components/vehicledetails';
import Footer from '../components/footer';
import LongBlueLine from "../components/longblue";

export default function challenge() {

    return (
        <div className="App">
            <Header />
            <BlueLine />
            <BackButton/>
            <div className="middle-element">
                <div className="two">
                    <h2>Information about challenging a PCN</h2>
                    <p>If you have received a Penalty Charge Notice (PCN) and
                        you want to make a challenge or representation (appeal), the
                        process you follow depends on what stage the notice has reached.</p>
                    <div className="">

                    </div>
                </div>
            </div>
        </div>
    )
}