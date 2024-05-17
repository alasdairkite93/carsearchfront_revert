import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState();

    const handleOnSubmit = () => {

        const name_value = document.querySelector('#customer_name');
        const emailInput = document.querySelector('#email');

        let customer_id = '';

        console.log('HANDLE SUBMIT: name: '+name_value.value+' email: '+emailInput.value);

        const {customerdata} = fetch('https://localhost:10000/create-customer', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailInput.value,
                name: name_value.value,
            }),
        }).then(r => r.json())
            .then(r => {
                console.log('response id register: '+JSON.stringify(r));
                navigate('/StripePrices', {state: r.id});
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