import '../../Stylesheets/header/header.css';
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../../Stylesheets/layout/centre.css';
import '../../Stylesheets/centre/centrestyles.css';
import Header from '../../components/header'
import BlueLine from '../../components/blueline'
import BackButton from '../../components/backbutton';
import '../../Stylesheets/challenge.css';
import Footer from '../../components/footer';
import LongBlueLine from "../../components/longblue";
import '../../Stylesheets/pay.css';
import '../../Stylesheets/forms.css'

export default function SignUp() {


    return (
        <div className="App">

            <Header/>
            <BlueLine/>
            <div className="middle-element">
                <div className="two" id="margintop">
                    <hr/>
                    <div className="signupbox">
                        <h1>You've signed up for an PCN reminder</h1>
                        <p>You'' get a text message one month before your PCN is due.</p>
                    </div>
                    <h3>What happens next?</h3>
                    <p>We've sent you a confirmation text message.</p>
                    <p>You'll get an immediate reminder when a PCN is issued, and again 1 week later if the PCN remains unpaid.</p>
                    <h3>Unsubscribing from PCN reminders</h3>
                    <p>If you want to unsubscribe at any time, text <b>STOP GK66FTP</b> to 07491163045.</p>
                    <p>Your mobile phone company will charge you a standard network fee for sending a text message to unsubscribe from the
                    MOT reminders service.</p>
                    <p style={{fontSize: "12px"}}><Link style={{fontSize: "12px"}}>What did you think of this service?</Link> (takes 30 seconds)</p>
                    <Link style={{fontSize: "12px"}}>Sign up for another PCN reminder</Link>
                </div>
            </div>
            <LongBlueLine />
            <Footer />

        </div>
    )

}