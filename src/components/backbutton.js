import React, { Component } from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../Stylesheets/header/header.css';

import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';

export default function BackButton() {

    let history = useNavigate();

    return (

        <div className="middle-element">
            <div className="straightlineback">
              <hr/>
                <div class="navbuttons">
                    <button style={{textAlign: "left", marginRight: "20px"}} onClick={() => history(-1)}>Back</button>
                    <button><Link style={{fontSize: "12px"}} to={"/"} >Check another vehicle</Link></button>
                </div>
            </div>
        </div>

    )

}