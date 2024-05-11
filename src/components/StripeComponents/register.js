import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState();

    const handleOnSubmit = () => {

        const name_value = document.querySelector('#customer_name');
        const emailInput = document.querySelector('#email');

        console.log('HANDLE SUBMIT: name: '+JSON.stringify(name_value)+' email: '+JSON.stringify(emailInput));

        const {customerdata} = fetch('https://emailback2.onrender.com/create-customer', {
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
                navigate('/StripeSubscription', {state: r});
            })
    }

    return (
        <div>
            <p>Page state data is {customerData}</p>
            <form id="signup-form">
                <label>
                    Email
                    <input id="email" type="email" placeholder="Email address" value="test@example.com" required/>
                </label>
                <label>
                    <input id="customer_name" type="text" placeholder="Name" value="Alasdair" required/>
                </label>
                <button type="button" onClick={handleOnSubmit}>
                    Register
                </button>
            </form>
        </div>
    )
}