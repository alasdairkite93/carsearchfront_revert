import {useLocation, useNavigate} from "react-router-dom";
import {useState} from 'react'

export default function Subscription() {

    const customer_data = useLocation();
    const [price, setPrice] = useState();
    const navigate = useNavigate();

    console.log("Customer ID: " + JSON.stringify(customer_data));

    const handleOnSubmit = () => {

        const priceid = 'price_1PCnGm2LoquNKfKzB9UtPY2K';
        const customerid = customer_data.state.id;

        const {subscription} = fetch('https://emailback2.onrender.com/create-subscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                priceId: priceid,
                customerId: customerid,
            }),
        }).then(r => r.json())
            .then(r => {
                console.log('Subscription Return: ' + JSON.stringify(r));
                navigate('/payment', {state: r});
            })
    }


    const onOptionChange = e => {
        console.log('price is set to: ' + e.target.value);
        setPrice(e.target.value);
    }

    return (
        <div>
            <h3>The subscription page</h3>
            <input type="radio" id="priceid" value="price_1PCnGm2LoquNKfKzB9UtPY2K"
                   onChange={onOptionChange}/>
            <button type="button" onClick={handleOnSubmit}>
                Subscribe
            </button>
        </div>
    )

}