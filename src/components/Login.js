import React, { Component } from 'react';
import './Auth.css'
import Header from '../Header';
import { Link } from 'react-router-dom';

const url = "https://authapizomato.herokuapp.com/api/auth/login"

export default class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            message: "",

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
            .then((res) => res.json())
            .then((data) => {
                if(data.auth === false){
                    this.setState({message:data.token})
                }else{
                    sessionStorage.setItem('ltk', data.token)
                    this.props.history.push('/')
                }
            })
    }
    

    render() {
        return (
            <>
                <Header />


<div className="container-box">
    <div className="card">
        <div className="inner-box">
            <div className="card-front">
                <h2>LOGIN</h2>
                <div className="form-group mb-3">
                    <input type="email" name='email' className="input-box" placeholder=" Your Email Id" required value={this.state.email}
                    onChange={this.handleChange} />

                    <input type="password" name='password' className="input-box" placeholder=" Password" required value={this.state.password}
                        onChange={this.handleChange} />

                    <button type="'submit" className="submit-btn button" onClick={this.handleSubmit}>Sign In</button>

                    <input type="checkbox" /><span>Remember Me</span>

                <p style={{color:"red"}}>{this.state.message}</p>

                </div>
               <Link to="/signup"> <button type="button" className="My-btn button">I'm New Here</button></Link>
                <a href="/">Forget Password</a>
            </div>
        </div>
    </div>
</div>
</>


        )
    }
}
