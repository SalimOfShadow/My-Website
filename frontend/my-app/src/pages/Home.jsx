import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/login/login.css';
import {
	Background,
	TopBezel,
	BottomBezel,
} from '../components/background/Background';
import Homepage from '../components/homepage/Homepage';

const Home = (props) => {
	return (
		<div className="mainContainer">
			{' '}
			{/* Add class name to main container */}
			<Homepage />
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

export default Home;
