import React, { Component } from "react";
import "./Auth.css";
import Header from "../Header";
import { Link } from "react-router-dom";

const url = "https://authapizomato.herokuapp.com/api/auth/register";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
}


handleSubmit = () => {
    fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
    })
        .then(this.props.history.push('/login'))
}

  render() {
    return (
      <>
        <Header />
        <div className="container-box">
          <div className="card">
            <div className="inner-box">
              <div className="card-back">
                <h2>REGISTER</h2>
                <div className="form-group mb-3">
                    
                  <input
                    type="text"
                    name="name"
                    className="input-box form-control"
                    placeholder=" Your Name "
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />

                  <input
                    type="email"
                    name="email"
                    className="input-box"
                    placeholder=" Your Email Id"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />

                  <input
                    type="password"
                    name="password"
                    className="input-box"
                    placeholder=" Password"
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
                  />

                  <input
                    type="number"
                    name="phone"
                    className="input-box"
                    placeholder=" Phone Number"
                    required
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />

                  <button
                    type="'submit"
                    className="submit-btn button"
                    onClick={this.handleSubmit}
                  >
                     Sign In
                  </button>

                  <input type="checkbox" />
                  <span>Remember Me</span>
                </div>
                <Link to="/login">
                <button type="button" className="My-btn button">
                  I'm have an account
                </button></Link>
               
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
