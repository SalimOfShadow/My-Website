import React, { useState } from 'react';
import '../components/login/login.css';
import {
	Background,
	TopBezel,
	BottomBezel,
} from '../components/background/Background';
import RegisterForm from '../components/register/RegisterForm';
const Register = (props) => {
	return (
		<div className="mainContainer">
			{' '}
			{/* Add class name to main container */}
			{/* TODO - Add a prop to this component to choose it's form type ( login/register/forgot ) */}
			<RegisterForm></RegisterForm>
			<Background
				source={require('../components/background/background-images/bg-img.png')}
			></Background>
			<TopBezel
				source={require('../components/background/background-images/top-bezel.png')}
			></TopBezel>
			<BottomBezel
				source={require('../components/background/background-images/bottom-bezel.png')}
			></BottomBezel>
		</div>
	);
};

export default Register;
