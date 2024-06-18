import React, { useState, useEffect } from 'react';
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useTransform,
} from 'framer-motion';

const images = require.context('./characters-images', true);
const imageList = images.keys().map((image) => images(image));

function CenterCharacter(props) {
	const picNumber = imageList.length;
	const randomIndex = Math.floor(Math.random() * picNumber);
	const [imageSource, setImageSource] = useState('');
	const [lastImage, setLastImage] = useState('');
	const [clickCount, setClickCount] = useState(0);
	const [isClickable, setIsClickable] = useState(false);
	let intervalId = null; // Declare intervalId as a variable

	useEffect(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
		if (isClickable) {
			intervalId = setInterval(() => {
				setLastImage(imageSource);
				setImageSource(imageList[randomIndex]);
				setClickCount(clickCount + 1);
			}, 6000);
			return () => {
				clearInterval(intervalId);
			};
		}
	}, [intervalId, isClickable]);

	if (imageSource === lastImage) {
		setImageSource(imageList[randomIndex]);
	}

	return (
		<AnimatePresence>
			<motion.div key={clickCount}>
				<motion.img
					onAnimationStart={() => setIsClickable(false)}
					onAnimationComplete={() => {
						setIsClickable(true);
					}}
					layout="position"
					initial={{
						y: '-20%',
						x: '50%',
						opacity: 0,
						scale: 0.0,
						filter: 'drop-shadow(1px 1px 2px #0000)',
					}}
					animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
					exit={{ y: '-20%', x: '-50%', opacity: 0, scale: 0 }}
					whileHover={{
						scale: 1.1,
						filter:
							'drop-shadow(-0.5vh 0.5vh 0.5vh #ff00ff) drop-shadow(0.5vh 0.5vh 0.5vh #9966ff) drop-shadow(0.5vh 0.5vh 0.5vh #3366ff)',
					}}
					// END MOTION
					src={imageSource || imageList[0]}
					alt="Center character"
					className="center-character"
					draggable="false"
					onClick={
						isClickable
							? () => {
									console.log(imageSource);
									setLastImage(imageSource);
									setImageSource(imageList[randomIndex]);
									setClickCount(clickCount + 1);
							  }
							: null
					}
				/>
			</motion.div>
		</AnimatePresence>
	);
}

export default CenterCharacter;
