import React, { Component } from 'react';

import '../Stylesheets/header/header.css';

import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';

export default function BackButton() {

    return (

        <div className="middle-element">
            <div className="straightlineback">
              <hr/>
                <a style={{textAlign: "left"}}><u>Back</u></a>
            </div>
        </div>

    )

}