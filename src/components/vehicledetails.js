import '../Stylesheets/header/header.css';

import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';
import {useLocation} from "react-router-dom";
import { Link } from 'react-router-dom';
import React from "react";

export default function VehicleDetails() {

    const location = useLocation();
    const state = location.state;
    console.log(state)

    return (

        <div className="App">
            <div className="middle-element">
                <div className="vehiclegrid">
                    <div className="oneinformation">
                        <h5>Colour</h5>
                        <h4>{state.color}</h4>
                    </div>
                    <div className="twoinformation">
                        <h5>Fuel Type</h5>
                        <h4>Unknown</h4>
                    </div>
                    <div className="threeinformation">
                        <h5>Date of Offence</h5>
                        <h4>{state.date}</h4>
                    </div>
                    <div className="fourinformation">
                        <h5>Current stage of the penalty</h5>
                        <h4></h4>
                    </div>
                    <div className="fiveinformation">
                        <h5>Action</h5>
                        <div className="fiveinformationcontent">
                            <Link to={"/payment"} state={state}>Pay Now</Link>
                            <span>&nbsp; &nbsp; &nbsp;</span>
                            <Link to={"/challenge"} state={state}>Challenge</Link>
                        </div>
                    </div>
                </div>
                <div className="four">
                    <div className="vehiclegridimage">
                        <div className="vehiclegridone">
                            <p>{state.council} Council believes that you are liable to pay a penalty charge with respect
                            to the above vehicle for the following alleged contravention.</p>
                            <p><b>Contravention: </b>{state.contravention}</p>
                            <p>In {state.location} on {state.date} at {state.time}</p>
                        </div>
                        <div className="vehiclegridtwo">
                            <p>Picture of vehicle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}