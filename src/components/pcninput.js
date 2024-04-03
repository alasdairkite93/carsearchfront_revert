import React, { Component } from 'react';

import '../Stylesheets/header/header.css';

import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';

export default function PCNInput() {

    return (
        <div className="middle-element">
            <div class="two">
                <p>View parking penalty charge notice (PCN) issued by local council and Transport for London</p>
                <br/>
                <h1>What is the vehicle's registration number? </h1>

                <form >
                    <label>Registration number (number plate)</label>
                    <br/>
                    <br />
                    <label>For example CU57ABC</label>
                    <br />
                    <br />
                    <input type="text" name="regnum"/>
                    <br />
                    <br />
                    <label>Penalty Charge Notice (PCN) number</label>
                    <br />
                    <br />
                    <input type="text" name="pcnnum" />
                    <br />
                    <br />
                    <button type="submit">Continue</button>
                </form>

            </div>
        </div>
    )
}