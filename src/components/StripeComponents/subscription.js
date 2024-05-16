import {useLocation, useNavigate} from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';

const stripe = await loadStripe('pk_test_51PCmo52LoquNKfKzQiLxCcY9RfnB1jOPEaYiO4bEB5zpP8sTS52APPJaASXqsP63cWnmooXqbrkYpnDNMc6IHZlK00QMZote7c');

export default function Subscription() {

    console.log('SUBSCRIPTION PAGE');

    const location = useLocation();

    console.log(JSON.stringify(location));

    const secret = JSON.stringify(location.state.clientSecret);

    // const elements = stripe.elements();


    const options = {
        clientSecret: location.state.clientSecret,
        // Fully customizable with appearance API.
        appearance: {/*...*/},
    };

// Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 5

// Create and mount the Subscription Element
    const elements = stripe.elements(options);
    const paymentElement = elements.create('payment', options);
    paymentElement.mount('#payment-element');

    return (
            <form id="payment-form">
                <div id="payment-element">
                </div>
                <button id="submit">Subscribe</button>
                <div id="error-message">
                </div>
            </form>

    )

}