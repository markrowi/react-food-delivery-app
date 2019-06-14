import React, { Component } from "react";
import { Link } from 'react-router-dom';

class RestaurantSignup extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="RestaurantSignup login">
                <div className="tabs">
                    <Link className="link" to="/restaurantLogin">
                        <span onClick={() => { this.setState({ isLogin: true }) }} > Log in</span>
                    </Link>
                    <Link className="link" to="/restaurantSignup">
                        <span onClick={() => { this.setState({ isLogin: false }) }} >Register</span>
                    </Link>
                </div>
                <h2>Sing up - Restaurant</h2>
                <input type="text" placeholder="Full name" /><br />
                <input type="text" placeholder="Restaurant name" /><br />
                <input type="email" placeholder="Email" /><br />
                <label>
                    <input type="radio" name="gender" />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" />
                    Female
                </label><br />
                <input type="number" placeholder="Age" /><br />
                <select>
                    <option>Country</option>
                    <option>Pakistan</option>
                </select>
                <select>
                    <option>City</option>
                    <option>Karachi</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Peshawar</option>
                </select><br />
                <input type="password" placeholder="Password" /><br />
                <input type="password" placeholder="Confirm Password" /><br />
                <input type="submit" value="Register" /><br />
            </div>
        )
    }
}

export default RestaurantSignup;