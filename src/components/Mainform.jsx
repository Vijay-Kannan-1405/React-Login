import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


class Mainform extends Component {

    render() {
        return (
            <div className="fullview">
                <div className="alert alert-success" id="heading">
                    <h1 className="heading">HEADER</h1>
                </div>
                <div className="navbar navbar-expand-lg navbar-light bg-dark">
                    <h5><Link className="link" to="/">LOGIN</Link></h5>
                    <h5><Link className="link" to="/register">REGISTER</Link></h5>
                    <h5><Link className="link" to="/about">ABOUT US</Link></h5>
                </div>
                
            </div>
        )
    }
}

export default Mainform;
