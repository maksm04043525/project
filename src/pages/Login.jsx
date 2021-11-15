import '../App.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context';


const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const [data, setData] = useState({ login: '', password: '' })
    const login = { login: 'maks', password: "qwe" }
    const onChange = (e) => {
        if (e.target.id === 'login') {
            setData({ ...data, login: e.target.value })
        }
        else {
            setData({ ...data, password: e.target.value })
        }
    }
    const onLogin = () => {
        if (data.login === login.login && data.password === login.password) {
            setIsAuth(true);
            localStorage.setItem('auth', 'true')
        }
    }

    return (

        <div className="container">
            <div className="littleContainer">
                <h2>Авторизуйтесь</h2>
                <form id="login">
                    <div className="input-field row s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="login" type="text" className="validate" onChange={onChange} />
                    </div>
                    <div className="input-field row s6">
                        <i className="material-icons prefix">dialpad</i>
                        <input id="password" type="tel" class="validate" onChange={onChange} />
                    </div>
                    <button onClick={() => onLogin()} className="btn waves-effect waves-light" type="submit" name="action">
                        Login
                        <i className="material-icons right">account_box</i>
                    </button>
                </form>
            </div>
        </div>

    );
};
export default Login;