import { animated, useSpring, useTrail } from 'react-spring';
import { useEffect } from 'react';

export const FadeIn = ({ show, children }) => {
	const [{ opacity, ...style }, api] = useSpring(() => ({
		opacity: 0,
		backgroundColor: 'lightgrey',
		padding: '5px',
		borderRadius: '10px',
		color: 'red',
	}));

	useEffect(() => {
		api.start({ opacity: show ? 1 : 0, config: { duration: 1000 } });
	}, [show, api]);

	return <animated.div style={{ opacity, ...style }}>{children}</animated.div>;
};

export const ScaleUp = ({ show, children }) => {
	const [{ transform, ...style }, api] = useSpring(() => ({
		transform: 'scale(0)',
		backgroundColor: 'lightgrey',
		padding: '5px',
		borderRadius: '10px',
		color: 'red',
	}));

	useEffect(() => {
		api.start({
			transform: show ? 'scale(1)' : 'scale(0)',
			config: { tension: 90, friction: 8, mass: 2 },
		});
	}, [show, api]);

	return (
		<animated.div style={{ transform, ...style }}>{children}</animated.div>
	);
};

export const SlideDown = ({ show, children }) => {
	const [{ marginTop, ...style }, api] = useSpring(() => ({
		marginTop: '-500px',
		backgroundColor: 'lightgrey',
		padding: '5px',
		borderRadius: '10px',
		color: 'red',
	}));

	useEffect(() => {
		api.start({
			marginTop: show ? '0px' : '-700px',
			config: {
				tension: 180,
				friction: 12,
				mass: 1,
			},
		});
	}, [show, api]);

	return (
		<animated.div style={{ marginTop, ...style }}>{children}</animated.div>
	);
};

export const ColorChange = ({ show, children }) => {
	const [{ backgroundColor, color, ...style }, api] = useSpring(() => ({
		backgroundColor: 'lightgrey',
		color: 'red',
		padding: '5px',
		borderRadius: '10px',
	}));

	useEffect(() => {
		api.start({
			backgroundColor: show ? 'red' : 'lightgrey',
			color: show ? 'white' : 'red',
			config: { tension: 50, friction: 10, mass: 2 },
		});
	}, [show, api]);

	return (
		<animated.div style={{ backgroundColor, color, ...style }}>
			{children}
		</animated.div>
	);
};

export const RotateAndSlideIn = ({ show, children }) => {
	const [{ transform, ...style }, api] = useSpring(() => ({
		transform: 'rotate(0deg) translateX(780%)',
		backgroundColor: 'lightgrey',
		padding: '5px',
		borderRadius: '10px',
		color: 'red',
	}));

	useEffect(() => {
		api.start({
			transform: show
				? 'rotate(360deg) translateX(0%)'
				: 'rotate(0deg) translateX(780%)',
			config: {
				tension: 50,
				friction: 10,
				mass: 2,
				clamp: true,
			},
		});
	}, [show, api]);

	return (
		<animated.div style={{ transform, ...style }}>{children}</animated.div>
	);
};

export const TrailAnimation = ({ items, show }) => {
	const trail = useTrail(items.length, {
		opacity: show ? 1 : 0,

		config: { mass: 5, tension: 500, friction: 30, clamp: true },
	});

	return (
		<div>
			{trail.map((style, index) => (
				<animated.div key={index} style={style}>
					{items[index]}
				</animated.div>
			))}
		</div>
	);
};
