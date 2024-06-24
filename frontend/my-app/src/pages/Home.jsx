import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/main-page/mainpage.css';
import {
	Background,
	TopBezel,
	BottomBezel,
} from '../components/background/Background';
import MainPage from '../components/main-page/MainPage';
import ResponsiveAppBar from '../components/navbar/Navbar';

const Home = (props) => {
	return (
		<div className="mainContainer">
			{' '}
			<ResponsiveAppBar></ResponsiveAppBar>
			<MainPage />
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
