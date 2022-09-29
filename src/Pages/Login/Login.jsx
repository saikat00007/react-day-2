import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [getFromData, setFromData] = useState({});
    const navigate = useNavigate();

    const getData = (e) => {
        setFromData({ ...getFromData, [e.target.name]: e.target.value.trim() });
        getFromData.name && setFromData({ name: true });
    }
        const handleSubmit = e => {
            e.preventDefault();
            sessionStorage.setItem('logininfo', JSON.stringify(getFromData));
            navigate("/about");
        }
    return (
        <div className='fromBox'>
            <h1>this is login</h1>
            <div className='box'>
		<form autocomplete='off' onSubmit={e => handleSubmit(e)}>
			<h2>Sign in</h2>
			<div className='inputBox'>
            <label htmlFor="exampleInputEmail1">Email address</label>
				 <input type="text" name='email' placeholder="Enter email"  onChange={(e) => getData(e)}/>
				<span>Userame</span>
				<i></i>
			</div>
			<div className='inputBox'>
                <label htmlFor="exampleInputPassword1">Password</label>
				<input type="password" name='password'placeholder="Enter password"   onChange={(e) => getData(e)}/>
				<span>Password</span>
				<i></i>
			</div>
			<div className='links'>
				<a href="#j">Forgot Password ?</a>
				<a href="#h">Signup</a>
			</div>
			<input type="submit" value="Login"/>
		</form>
	</div>
        </div>
    );
};

export default Login;