import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logoGoole from '../assets/images/Google__G__Logo.svg';
import '../scss/Register.scss';

const Register = () => {
    const { handleSubmit, register, errors } = useForm();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="login">
            <Row className="m-0">
                <Col className="text-center">
                    <label className="title">Getting Started</label>
                </Col>
            </Row>
            <Row >
                <Col xs={12} className="input-field col s12 ">
                    <input
                        id="fullname"
                        name="fullname"
                        className={errors.fullname ? 'invalid' : ''}
                        onChange={value => setFullname(value)}
                        ref={register({
                            required: "*This field can not be empty",
                            validate: value => value !== ""
                        })}
                    />
                    <label for="fullname" className={(fullname || '') !== '' ? 'active' : ''}>Full Name</label>
                    <span className="helper-text " data-error={errors.fullname && errors.fullname.message} />
                </Col>
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
                    <label for="password" className={(password || '') !== '' ? 'active' : ''}>Create Password</label>
                    <span className="helper-text " data-error={errors.password && errors.password.message} />
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
                        <img src={logoGoole} alt="Google" className="float-left"/>
                        <span>Sign up with Google</span>
                        </button>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    By signing up, you agree to <strong>Invision</strong>
                    <br/>
                    <Link to="/" className="link">Terms of Conditions</Link> and <Link to="/" className="link">Privacy Policy</Link>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">Already on <strong>Invision</strong>? <Link to="/" className="link">Log In</Link></Col>
            </Row>
        </form>
    );
};

export default Register;