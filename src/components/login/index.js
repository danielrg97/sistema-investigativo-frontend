import React from 'react';
import LoginIndex from './loginComponent';
import './login.css';

const LoginComponent = ({history}) => {
    return (
    <div className="MainLoginContainer">
        <div className ="title">
            <h1>Bienvenido al sistema investigativo</h1>
            <p style={{color:"white"}}>para llevar control de semilleros, lineas de investigación y más.</p>
        </div>
        <LoginIndex history={history}/>
    </div>);
};

export default LoginComponent;