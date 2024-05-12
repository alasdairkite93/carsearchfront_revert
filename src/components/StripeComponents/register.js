import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
export default function Register() {

    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState();

    const handleOnSubmit = async function (e) {

        e.preventDefault();

        let emailInput = e.target[0].value;
        let name_value = e.target[1].value;

        console.log('name_value: '+name_value);
        console.log('emailinput: '+emailInput);

        const {customerdata} = await fetch('https://emailback2.onrender.com/create-customer', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailInput.value,
                name: name_value.value,
            }),
        }).then(r => r.json())
            .then(r => console.log(r))
            .then(r => {
                navigate('/StripeSubscription', {state: customerdata});
            })

    }

    return (
        <div>
            <p>Page state data is {customerData}</p>
            <form id="signup-form" onSubmit={handleOnSubmit}>
                <label>
                    Email
                    <input id="email" name="emailval" type="email" placeholder="Email address" required/>
                </label>
                <label>
                    <input id="customer_name" name="customerval" type="text" placeholder="Name" required/>
                </label>
                <button type="Submit" >
                    Register
                </button>
            </form>
        </div>
    )
}