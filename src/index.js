import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VehicleInformation from './pages/VehicleInformation';
import Payment from "../src/pages/Payment";
import Challenge from "../src/pages/Challenge";
import VehicleReminder from "../src/pages/reminder";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EmailInput from "./components/formfiles/emailinput";
import TextInput from "./components/formfiles/textinput";
import SummaryPage from "../src/pages/summarypage";
import Activation from "./components/formfiles/activation";
import SignUp from "./components/formfiles/signup";
import PostSubmit from "../src/pages/postsubmit";
import PaymentMulti from "./components/paymentmulti";
import Subscribe from "./components/StripeComponents/subscribe";
import PostSubscribe from "./components/StripeComponents/PostSubscribe";
import Subscription from "./components/StripeComponents/subscription";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App /> ,
    },
    {
        path:"/postsubmit",
        element: <PostSubmit />
    },
    {
        path: "/vehicleinformation",
        element: < VehicleInformation />
    },
    {
        path: "/payment",
        element: < Payment />
    },
    {
        path: "/challenge",
        element: < Challenge />
    },
    {
        path: "/reminder",
        element: < VehicleReminder />
    },
    {
        path: "/email",
        element: < EmailInput />
    },
    {
        path: "/text",
        element: < TextInput />
    },
    {
        path: "/summary",
        element: < SummaryPage />
    },
    {
        path: "/activation",
        element: < Activation />
    },
    {
        path: "/signup",
        element: < SignUp />
    },
    {
        path: "/multipayment",
        element: < PaymentMulti />
    },
    {
        path: "/StripeRegister",
        element: < Subscribe />
    },
    {
        path: "/StripeSubscription",
        element: <PostSubscribe />
    },
    {
        path: "/StripePayment",
        element: < Subscription />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
