import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import './Stylesheets/header/header.css';
import '../src/Stylesheets/layout/centre.css';
import '../src/Stylesheets/centre/centrestyles.css';

import Header from '../src/components/header';
import BlueLine from "./components/blueline";
import BackButton from "./components/backbutton";
import PCNInput from "./components/pcninput";
import LongBlueLine from "./components/longblue";
import Footer from "../src/components/footer";

function App() {

  // new line start
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios.get('http://127.0.0.1:5000/')
        .then((response) => {
          const res =response.data
          setProfileData(({
            profile_name: res.name,
            about_me: res.about}))
        }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })}
  //end of new line

  return (
      <div className="App">
          <Header />
            <BlueLine />
            <BackButton/>
            <PCNInput/>
          <LongBlueLine/>
          <Footer />
      </div>
  );
}

export default App;
