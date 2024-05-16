import {useLocation, useNavigate} from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import {Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import {Stripe} from "stripe";
import CheckoutForm from "./CheckoutForm";

const stripePromise = await loadStripe('pk_test_51PCmo52LoquNKfKzQiLxCcY9RfnB1jOPEaYiO4bEB5zpP8sTS52APPJaASXqsP63cWnmooXqbrkYpnDNMc6IHZlK00QMZote7c');
const publishableKey = 'pk_test_51PCmo52LoquNKfKzQiLxCcY9RfnB1jOPEaYiO4bEB5zpP8sTS52APPJaASXqsP63cWnmooXqbrkYpnDNMc6IHZlK00QMZote7c';
const Subscription = () => {

    const location = useLocation();
    console.log("PAge Location: ", JSON.stringify(location));
    const clientSecret = JSON.stringify(location.state.clientSecret);
    console.log("PAge Secret: ", JSON.stringify(location.state.clientSecret));

    document.addEventListener('DOMContentLoaded', async () => {
        const stripe = Stripe('pk_test_51PCmo52LoquNKfKzQiLxCcY9RfnB1jOPEaYiO4bEB5zpP8sTS52APPJaASXqsP63cWnmooXqbrkYpnDNMc6IHZlK00QMZote7c');

        const appearance = { /* appearance */};
        const options = {
            clientSecret: clientSecret,
            // Fully customizable with appearance API.
            appearance: {/*...*/},
        };
        const elements = stripe.elements({clientSecret, appearance});
        const paymentElement = elements.create('payment', options);
        paymentElement.mount('#payment-element');

    });

    return (
        <>
                <form id="payment-form">
                    <div id="payment-element">
                    </div>
                    <button id="submit">Subscribe</button>
                    <div id="error-message">
                    </div>
                </form>
        </>
    )
}
export default Subscription;
//     console.log('SUBSCRIPTION PAGE');
//
//     const location = useLocation();
//
//     console.log(JSON.stringify(location));
//
//     const secret = JSON.stringify(location.state.clientSecret);
//
//     // const elements = stripe.elements();
//
//
//     const options = {
//         clientSecret: location.state.clientSecret,
//         // Fully customizable with appearance API.
//         appearance: {/*...*/},
//     };
//
// // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 5
//
// // Create and mount the Subscription Element
//     const elements = stripe.elements(options);
//     const paymentElement = elements.create('payment', options);
//     paymentElement.mount('payment-element');
//
//     return (
//         <div>
//             <form id="payment-form">
//                 <div id="payment-element">
//                 </div>
//                 <button id="submit">Subscribe</button>
//                 <div id="error-message">
//                 </div>
//             </form>
//         </div>
//
//     )
//
// }