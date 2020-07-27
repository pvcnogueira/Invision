import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import logoGoole from '../assets/images/Google__G__Logo.svg';
import "../scss/Login.scss";

const Login = () => {
    const { handleSubmit, register, errors } = useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login">
            <Row>
                <Col className="text-center">
                    <label className="title">Welcome to Invision</label>
                </Col>
            </Row>
            <Row >
                <Col xs={12} className="input-field col s12">
                    <input
                        id="username"
                        name="username"
                        className={errors.username ? 'invalid' : ''}
                        onChange={value => setUsername(value)}
                        ref={register({
                            required: "*This field can not be empty",
                            validate: value => value !== ""
                        })}
                    />
                    <label for="username" className={(username || '') !== '' ? 'active' : ''}>Users name or Email</label>
                    <span class="helper-text" data-error={errors.username && errors.username.message} />
                </Col>
                <Col xs={12} className="input-field col s12 ">
                    <input
                        id="password"
                        name="password"
                        className={errors.password ? 'invalid' : ''}
                        onChange={value => setPassword(value)}
                        ref={register({
                            required: "*This field can not be empty",
                            validate: value => value !== ""
                        })}
                    />
                    <label for="password" className={(password || '') !== '' ? 'active' : ''}>Password</label>
                    <span className="helper-text " data-error={errors.password && errors.password.message} />
                </Col>
                <Col xs={12} className="text-right">
                    <span className="forgot ">Forgot password?</span>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <button className="btn-flat" type="submit">Sign In</button>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center bar">
                <Col xs={5}><hr /></Col>
                <Col xs={1} className="text-center primary-color">or</Col>
                <Col xs={5}><hr /></Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <button className="btn sign d-flex justify-content-between align-items-center">
                        <img src={logoGoole} alt="Google" className="float-left" />
                        <span>Sign in with Google</span>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">New Invision? <Link to="/register" className="link">Create Account</Link></Col>
            </Row>
        </form>
    );
};

export default Login;