import '../Stylesheets/header/header.css';
import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';
import {useLocation} from "react-router-dom";
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function VehicleDetails() {

    const location = useLocation();
    const state = location.state;
    console.log('VEHICLE DETAILS STATE: '+JSON.stringify(state));

    if (state.ticket.case === undefined){
        state.ticket.case = 'Unavailable';
    }

    console.log(state.ticket.images);

    return (

        <div className="App">
            <div className="middle-element">
                <div className="two" >
                    <p style={{lineHeight: "0px", fontSize: "25px"}}>{state.ticket.registration}</p>
                    <h1 style={{fontSize: "40px"}}>{state.ticket.make}{state.ticket.info.model}</h1>
                    <Link style={{fontSize: "12px"}} >Check another vehicle</Link>
                </div>
                <div className="three">
                <div className="vehiclegrid" style={{marginTop: "150px"}}>
                    <div className="oneinformation">
                        <h5 id="greycol">Colour</h5>
                        <h4 style={{fontSize: "20px"}}>{state.ticket.info.color}</h4>
                    </div>
                    <div className="twoinformation">
                        <h5 id="greycol">Fuel Type</h5>
                        <h4 style={{fontSize: "20px"}}>{state.ticket.info.fuel} </h4>
                    </div>
                    <div className="threeinformation">
                        <h5 id="greycol">Date of Offence</h5>
                        <h4 style={{fontSize: "20px"}} >{state.ticket.date}</h4>
                    </div>

                    <div className="fourinformation">
                        <h5 id="greycol">Current stage of the penalty</h5>
                        <h4 style={{fontSize: "20px"}}>{state.ticket.case}</h4>
                    </div>
                    <div className="fiveinformation">
                        <h5 id="greycol">Action</h5>
                        <div style={{marginBottom: "15px"}} className="fiveinformationcontent">
                            <Link to={"/payment"} style={{fontSize: "20px", color: "#4C8EC0"}} state={state}><b>Pay Now</b></Link>
                            <span>&nbsp; &nbsp; &nbsp;</span>
                            <Link to={"/challenge"} style={{fontSize: "20px", color: "#4C8EC0"}} state={state}><b>Challenge</b></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className="four">
                    <div className="vehiclegridimage">
                        <div className="vehiclegridone">
                            <p>{state.ticket.council} Council believes that you are liable to pay a penalty charge with respect
                            to the above vehicle for the following alleged contravention.</p>
                            <p><b>Contravention: </b>{state.ticket.contravention}</p>
                            <p>In {state.ticket.location} on {state.ticket.date} at {state.time}</p>
                        </div>
                        <div className="vehiclegridtwo">
                            <img src={state.ticket.images}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}