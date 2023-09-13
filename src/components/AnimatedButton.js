import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedButton = ({ onClick, children }) => {
	const [props, set] = useSpring(() => ({
		transform: 'scale(1)',
		backgroundColor: '#008CBA',
		color: 'white',
	}));

	return (
		<animated.button
			style={props}
			onMouseEnter={() =>
				set({ transform: 'scale(1.3)', backgroundColor: '#005f73' })
			}
			onMouseLeave={() =>
				set({ transform: 'scale(1)', backgroundColor: '#008CBA' })
			}
			onClick={onClick}
		>
			{children}
		</animated.button>
	);
};

export default AnimatedButton;
