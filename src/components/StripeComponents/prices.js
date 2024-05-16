import {useLocation, useNavigate} from "react-router-dom";
import {useState} from 'react'

export default function Prices() {

    const customer_data = useLocation();
    const [price, setPrice] = useState();
    const navigate = useNavigate();

    let customer_id = JSON.stringify(customer_data.state);
    console.log("CustomerID prices.js: "+JSON.stringify(customer_data.state));
    const handleOnSubmit = () => {

        const priceid = 'price_1PCmvN2LoquNKfKzXOtLab2t';

        const {subscription} = fetch('https://emailback2.onrender.com/create-subscription', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                priceId: priceid,
                customerId: customer_data.state,
            }),
        }).then(r => r.json())
            .then(r => {
                console.log('Prices Return: ' + JSON.stringify(r));
                navigate('/stripepayment', {state: r});
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