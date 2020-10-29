import React from 'react';
import { ErrorMessage, Field, Form, withFormik } from "formik";
import LoginSchema from './schema';

const FormLogin = ({handleSubmit}) => {
    return(
        <Form onSubmit={handleSubmit} className="loginForm" id="loginForm">
        <Field type="text" name="userName">
          {({ field: { value, name, onBlur, onChange } }) => (
            <div>
              <input
                type="text"
                className="loginInput"
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={"Ingrese su usuario institucional"}
              />
              <br />
              <ErrorMessage name="userName" component={"div"}>
                {(message) => (
                  <div>
                    <div className="ui pointing red basic label">{message}</div>
                  </div>
                )}
              </ErrorMessage>
            </div>
          )}
        </Field>
        <Field type="password" name="password">
          {({ field: { value, name, onBlur, onChange } }) => (
            <div>
              <input
                type="password"
                className="loginInput"
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={"Ingrese su contraseña"}
              />
              <br />
              <ErrorMessage name="password" component={"div"}>
                {(message) => (
                  <div>
                    <div className="ui pointing red basic label">{message}</div>
                  </div>
                )}
              </ErrorMessage>
            </div>
          )}
        </Field>
      </Form>
    );
}
export default withFormik({
    mapPropsToValues: () => ({ userName: "", password: "" }),
    validationSchema: LoginSchema,
    handleSubmit: (values, {props}) => {
        //Paso el submit por props para poder hacer el metodo en el componente padre y desacoplar el formulario
        props.submit(values);
    }
  })(FormLogin);