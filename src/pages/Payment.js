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

export default function pay() {

    return (
        <div className="App">
            <Header/>
            <BlueLine/>
            <BackButton/>

            <div className="paygrid">
                <div className="paymiddle">
                    <div className="paybuttoncontainer">
                        <button id="singlepayment">
                            <div className="paybuttongrid">
                                <div className="paybuttonleft">
                                    <span class="dot"></span>
                                </div>
                                <div className="paybuttonright">
                                    <h1>Single Payment</h1>
                                    <p>Pay a single invoice</p>
                                </div>
                            </div>
                        </button>
                        <button id="singlepayment">
                            <div className="paybuttongrid">
                                <div className="paybuttonleft">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                                <div className="paybuttonright">
                                    <h1>Multiple Payment</h1>
                                    <p>Make payments against two or more invoices</p>
                                </div>
                            </div>
                        </button>
                        <button id="singlepayment">
                            <div>
                                <h1>Please note</h1>
                                <span>If you have been visited by one of our enforcement agents,
                                additional costs may have been incurred for which you will need
                                to contact the office in order to obtain the unpaid balance
                                figure.</span>
                                <p><b>These charges are legally payable.</b></p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <LongBlueLine/>
            <Footer/>
        </div>
    )
}