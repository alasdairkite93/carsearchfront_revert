import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
export default function Register() {

    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState();

    const handleOnSubmit = async function (e) {

        let name_value = e.target.customerval.value;
        let emailInput = e.target.emailval.value;

        console.log('name_value: '+name_value);
        console.log('emailinput: '+emailInput);

        const {customerdata} = await axios.post('https://emailback2.onrender.com/create-customer', {
            emailInput,
            name_value,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

                navigate('/StripeSubscription', {state: customerdata})
    }

    return (
        <div>
            <p>Page state data is {customerData}</p>
            <form id="signup-form">
                <label>
                    Email
                    <input id="email" name="emailval" type="email" placeholder="Email address" value="test@example.com" required/>
                </label>
                <label>
                    <input id="customer_name" name="customerval" type="text" placeholder="Name" value="Alasdair" required/>
                </label>
                <button type="button" onClick={handleOnSubmit}>
                    Register
                </button>
            </form>
        </div>
    )
}