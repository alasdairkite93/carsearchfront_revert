import React from 'react';
import axios from "axios";
import '../Stylesheets/header/header.css';
import { Link } from 'react-router-dom';
import '../Stylesheets/layout/centre.css';
import '../Stylesheets/centre/centrestyles.css';
import '../Stylesheets/forms.css';
import '../Stylesheets/infopage.css'
class PCNInput extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                flask_response: '0',
                reg_num: '0',
                pcn_num: '0',
                details_submitted: false
            };
        }

        handleSubmit = async (e) => {



            e.preventDefault();

            let reg_number = e.target.regnum.value;
            let pcn_number = e.target.pcnnum.value;

            const {data} = await axios.post('https://emailback2.onrender.com/postrequest', {
                reg_number,
                pcn_number
            }, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            })

            console.log(data);

            //Add error handling for whether the data was returned correctly

            this.setState({
                flask_response: data,
                reg_num: reg_number,
                pcn_num: pcn_number,
                details_submitted: true
        })
    }

    render() {

        if (this.state.details_submitted === false) {

            return (
                <div className="middle-element">
                    <div className="two">
                        <p style={{fontSize: "15px"}}><b>View parking penalty charge notice (PCN) issued by local council and Transport for London</b></p>
                        <br/>
                        <h1>What is the vehicle's registration number? </h1>

                        <form onSubmit={this.handleSubmit} >
                            <label><b>Registration number (number plate)</b></label>
                            <p id="exampletext">For example CU57ABC</p>
                            <input
                                type="text"
                                name="regnum"
                                id="inputbox"
                                autoCapitalize="on"
                                onChange={this.handleInputChange}
                                // pattern="(^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$)|(^[A-Z][0-9]{1,3}[A-Z]{3}$)|(^[A-Z]{3}[0-9]{1,3}[A-Z]$)|(^[0-9]{1,4}[A-Z]{1,2}$)|(^[0-9]{1,3}[A-Z]{1,3}$)|(^[A-Z]{1,2}[0-9]{1,4}$)|(^[A-Z]{1,3}[0-9]{1,3}$)|(^[A-Z]{1,3}[0-9]{1,4}$)|(^[0-9]{3}[DX]{1}[0-9]{3}$)"
                                required
                            />
                            <br/><br/>
                            <label><b>Penalty Charge Notice (PCN) number</b></label>
                            <p id="exampletext">Optional</p>
                            <input
                                type="text"
                                name="pcnnum"
                                autoCapitalize="on"
                                id="inputbox"
                                // pattern="^['A-Z']['A-Z'][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
                                required
                            />
                            <br/><br/>
                            <button type="submit" id="formbutton">Continue</button>
                        </form>

                    </div>
                </div>
            )
        }
        else if (this.state.details_submitted === true) {
            return (
                <div className="middle-element">
                    <div className="two">
                        <p style={{lineHeight: "0px"}}>{this.state.flask_response.registration}</p>
                        <h1>{this.state.flask_response.make}{this.state.flask_response.info.model}</h1>
                        <Link style={{fontSize: "12px"}}>Check another vehicle</Link>
                        <p><Link style={{fontSize: "12px", marginBottom: "10px" }} to={"/reminder"} state={{ticket: this.state.flask_response}}>Get a Reminder</Link></p>

                    </div>
                        <div className="vehiclegrid">
                            <div className="oneinformation">
                                <h5 style={{color: "#808080"}}>Colour</h5>
                                <h4>{this.state.flask_response.info.color}</h4>
                                {/*<Link style={{fontSize: "12px"}} to={"/vehicleinformation"} state={{ticket: this.state.flask_response}}>Get a PCN reminder</Link>*/}
                            </div>
                            <div className="twoinformation">
                                <h5 style={{color: "#808080"}}>Fuel Type</h5>
                                <h4>{this.state.flask_response.info.fuel}</h4>
                            </div>
                        </div>
                    </div>
            )
        }
    }
}

export default PCNInput;