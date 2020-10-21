import React from 'react';
import LoginForm from './form';

const LoginIndex = () =>{
    return(
    <div class="loginContainer">
        <h1>Inicia sesión</h1>
        <LoginForm></LoginForm>
        <div class="loginButtonsCont">
            <input type="submit" value="Ingresar"></input>
            <input type="button" class="loginForgot" value="¿No tienes usuario? Regístrate"></input>
        </div>
    </div>
    );
};

export default LoginIndex;