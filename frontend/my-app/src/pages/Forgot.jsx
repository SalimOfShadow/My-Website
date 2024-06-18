import images from '../Images/images';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/login/login.css';
import {
	Background,
	TopBezel,
	BottomBezel,
} from '../components/background/Background';
import ForgotForm from '../components/forgot/ForgotForm';

const Forgot = (props) => {
	return (
		<div className="mainContainer">
			{' '}
			{/* Add class name to main container */}
			<ForgotForm></ForgotForm>
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

export default Forgot;
