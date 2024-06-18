import React from 'react';
import {
	Background,
	TopBezel,
	BottomBezel,
} from '../components/background/Background';
import Container from '../components/container/Container';
import images from '../Images/images';
const About = (props) => {
	return (
		<div {...props}>
			<Background
				source={
					'frontend/my-app/src/components/background/background-images/bg-img.png'
				}
			></Background>
			<TopBezel
				source={
					'frontend/my-app/src/components/background/background-images/top-bezel.png'
				}
				className={'top-bezel'}
			></TopBezel>
			<BottomBezel
				source={
					'frontend/my-app/src/components/background/background-images/bottom-bezel.png'
				}
				className={'bottom-bezel'}
			></BottomBezel>
			;
			<Container containerClass="centered-container" redirectPath="/Login">
				<p className="greeting-text">Sign in to enter!</p>
			</Container>
		</div>
	);
};
export default About;
