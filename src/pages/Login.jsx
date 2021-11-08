import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Login = () => {
    return (
        <form>
            <div className="container">
                <div className="input-field row s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" />
                </div>
                <div className="input-field row s6">
                    <i className="material-icons prefix">dialpad</i>
                    <input id="icon_telephone" type="tel" class="validate" />
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">
                    Login
                    <i className="material-icons right">account_box</i>
                </button>
            </div>
        </form>
    )
}
export default Login;