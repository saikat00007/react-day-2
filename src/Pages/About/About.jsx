import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className=''>
            <div className='box'>
		<form autocomplete='off'>
			<h2>Sign in</h2>
			<div className='inputBox'>
				<input type="text" required="required"/>
				<span>Userame</span>
				<i></i>
			</div>
			<div className='inputBox'>
				<input type="password" required="required"/>
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

export default About;