import React, { Component, useState } from 'react';
import axios from "axios";
import '../Stylesheets/header/header.css';

import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';


class PCNInput extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                flask_response: '0',
                reg_num: '0',
                pcn_num: '0',
                details_submitted: false
            };
        }

        handleSubmit = async (e) => {



            e.preventDefault();

            let reg_number = e.target.regnum.value;
            let pcn_number = e.target.pcnnum.value;

            const {data} = await axios.post('https://emailback2.onrender.com/postrequest', {
                reg_number,
                pcn_number
            }, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            })

            //Add error handling for whether the data was returned correctly

            this.setState({
                flask_response: data,
                reg_num: reg_number,
                pcn_num: pcn_number,
                details_submitted: true
        })
    }

    render() {

        if (this.state.details_submitted === false) {

            return (
                <div className="middle-element">
                    <div className="two">
                        <p>View parking penalty charge notice (PCN) issued by local council and Transport for London</p>
                        <br/>
                        <h1>What is the vehicle's registration number? </h1>

                        <form onSubmit={this.handleSubmit} action="/results">
                            <label>Registration number (number plate)</label>
                            <br/><br/>
                            <label>For example CU57ABC</label>
                            <br/><br/>
                            <input
                                type="text"
                                name="regnum"
                                onChange={this.handleInputChange}
                                pattern="(^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$)|(^[A-Z][0-9]{1,3}[A-Z]{3}$)|(^[A-Z]{3}[0-9]{1,3}[A-Z]$)|(^[0-9]{1,4}[A-Z]{1,2}$)|(^[0-9]{1,3}[A-Z]{1,3}$)|(^[A-Z]{1,2}[0-9]{1,4}$)|(^[A-Z]{1,3}[0-9]{1,3}$)|(^[A-Z]{1,3}[0-9]{1,4}$)|(^[0-9]{3}[DX]{1}[0-9]{3}$)"
                                required
                            />
                            <br/><br/>
                            <label>Penalty Charge Notice (PCN) number</label>
                            <br/><br/>
                            <input
                                type="text"
                                name="pcnnum"
                                pattern="^['A-Z']['A-Z'][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
                                required
                            />
                            <br/><br/>
                            <button type="submit">Continue</button>
                        </form>

                    </div>
                </div>
            )
        }
        else if (this.state.details_submitted === true) {
            return (
                <div className="middle-element">
                    <div className="two">
                        <p>Form Submitted</p>
                        <p>Registration: {this.state.flask_response.registration}</p>
                        <p>Date: {this.state.flask_response.date}</p>
                        <p>Time: {this.state.flask_response.time}</p>
                        <p>Make: {this.state.flask_response.make}</p>
                        <p>Color: {this.state.flask_response.color}</p>

                    </div>
                </div>
            )
        }
    }
}

export default PCNInput;