import React from 'react';
import LoginIndex from './loginComponent';
import './login.css';

const LoginComponent = () => {
    return (
    <div className="MainLoginContainer">
        <div class ="title">
            <h1>Bienvenido al sistema investigativo</h1>
            <pre>para llevar control de semilleros, lineas de investigación y más.</pre>
        </div>
        <LoginIndex/>
    </div>);
};

export default LoginComponent;