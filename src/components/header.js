
import React, { Component } from 'react';

import '../Stylesheets/header/header.css';

import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';

export default function Header() {

        return (
        <div className="top-element">
            <div className="two">
                <div className="textgrid">
                    <div className="oneheadertext">
                        <h1 id="headertext">PCN.UK</h1>
                    </div>
                    <div className="twoheadertext">
                        <h1 id="headertitle">Get a PCN reminder</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

