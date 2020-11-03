import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Dimmer, Loader } from 'semantic-ui-react';
import { toastProperties } from '../../utils/utils';
import { loginAction } from './actions';
import LoginForm from './form';

const LoginIndex = ({history}) =>{
    const dispatch = useDispatch();
    const {loading, error} = useSelector(state => state.loginReducer);
    
    const formSubmit = (values) => {
        dispatch(loginAction(values));
    }

    const validate = _ => {
        if(error !== false && typeof error !== 'undefined'){
            toast.warn(error.response.data.message, toastProperties);
        }else if(error === false && localStorage.getItem("Authorization") !== null){
            history.push("/main");
        }
    }
    return(
    <div className="loginContainer">
        {loading && loading === true &&
            <Dimmer active>
                <Loader/>
            </Dimmer>
        }
        {
            //Se valida en tiempo de renderizado
            validate()
        }
        <h1>Inicia sesión</h1>
        <LoginForm submit={formSubmit}/>
        <div className="loginButtonsCont">
            <input type="submit" form="loginForm" value="Ingresar"></input>
            <input type="button" className="loginForgot" value="¿No tienes usuario? Regístrate"></input>
        </div>
    </div>
    );
};

export default LoginIndex;