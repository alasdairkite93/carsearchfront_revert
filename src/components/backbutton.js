import React, { Component } from 'react';
import {useNavigate} from "react-router-dom";
import '../Stylesheets/header/header.css';

import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';

export default function BackButton() {

    let history = useNavigate();

    return (

        <div className="middle-element">
            <div className="straightlineback">
              <hr/>
                <button style={{textAlign: "left"}} onClick={() => history(-1)}>Back</button>
            </div>
        </div>

    )

}