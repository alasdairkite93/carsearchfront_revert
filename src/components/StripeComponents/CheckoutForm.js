import {EmbeddedCheckout, EmbeddedCheckoutProvider, PaymentElement} from '@stripe/react-stripe-js';
import React, {useCallback} from "react";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51PCmo52LoquNKfKzQiLxCcY9RfnB1jOPEaYiO4bEB5zpP8sTS52APPJaASXqsP63cWnmooXqbrkYpnDNMc6IHZlK00QMZote7c");

const CheckoutForm = () => {
    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        return fetch("https://emailback2.onrender.com/create-checkout-session-2", {
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => data.clientSecret);
    }, []);

    const options = {fetchClientSecret};

    return (
        <div id="checkout">
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={options}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}

export default CheckoutForm;