import {useLocation, useNavigate} from "react-router-dom";

export default function Stripepayment() {

    const location = useLocation();

    console.log(JSON.stringify(location));

    const secret = JSON.stringify(location.state.clientSecret);

    const stripe = window.Stripe('pk_test_51PCmo52LoquNKfKzQiLxCcY9RfnB1jOPEaYiO4bEB5zpP8sTS52APPJaASXqsP63cWnmooXqbrkYpnDNMc6IHZlK00QMZote7c');

    const options = {
        clientSecret: location.state.clientSecret,
        // Fully customizable with appearance API.
        appearance: {/*...*/},
    };

// Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 5
    const elements = stripe.elements(options);

// Create and mount the Stripepayment Element
    const paymentElement = elements.create('payment');
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