import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import AnimatedButton from './AnimatedButton';
import {
	ColorChange,
	FadeIn,
	RotateAndSlideIn,
	ScaleUp,
	SlideDown,
	TrailAnimation,
} from './Animations';
import './Home.css';

function Home() {
	const [show, setShow] = useState(true);
	const [showTrail, setShowTrail] = useState(false);
	const items = ['🍕', '🌮', '🍔', '🌭', '🍟'];

	return (
		<Parallax pages={6}>
			<ParallaxLayer
				offset={0}
				speed={1}
				factor={8}
				style={{
					backgroundImage: `url(/blurred-1226286_1920.jpg)`,
					backgroundSize: 'auto',
					backgroundRepeat: 'repeat',
					backgroundPosition: 'center',
					width: '800vh',
				}}
				horizontal
			/>
			<ParallaxLayer offset={0} speed={0}>
				<div
					style={{
						backgroundColor: 'coral',
						height: '100vh',
						width: '90vw',
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<AnimatedButton onClick={() => setShow((prev) => !prev)}>
						Slide Down
					</AnimatedButton>
				</div>
				<div
					style={{
						position: 'fixed',
						top: '60%',
						right: '45%',
						border: '1px solid black',
						padding: '20px',
						borderRadius: '8px',
					}}
				>
					<SlideDown show={show}>Slide Down Animation</SlideDown>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={0.9}>
				<div
					style={{
						background: 'lightblue',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<AnimatedButton onClick={() => setShow((prev) => !prev)}>
						Fade In
					</AnimatedButton>
				</div>
				<div
					style={{
						position: 'fixed',
						top: '60%',
						right: '45%',
						border: '1px solid black',
						padding: '20px',
						borderRadius: '8px',
					}}
				>
					<FadeIn show={show}>Fade Animation</FadeIn>
				</div>
			</ParallaxLayer>

			<ParallaxLayer offset={2} speed={-3}>
				<div
					style={{
						background: 'lightgreen',
						height: '100vh',
						width: '90vw',
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<AnimatedButton onClick={() => setShow((prev) => !prev)}>
						Scale Up
					</AnimatedButton>
				</div>
				<div
					style={{
						position: 'fixed',
						top: '60%',
						right: '45%',
						border: '1px solid black',
						padding: '20px',
						borderRadius: '8px',
					}}
				>
					<ScaleUp show={show}>Scale Animation</ScaleUp>
				</div>
			</ParallaxLayer>

			<ParallaxLayer offset={3} speed={0.9}>
				<div
					style={{
						background: 'dodgerblue',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<AnimatedButton onClick={() => setShow((prev) => !prev)}>
						Color Change
					</AnimatedButton>
				</div>
				<div
					style={{
						position: 'fixed',
						top: '60%',
						right: '45%',
						border: '1px solid black',
						padding: '20px',
						borderRadius: '8px',
					}}
				>
					<ColorChange show={show}>Color Change Animation</ColorChange>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={4} speed={0.9}>
				<div
					style={{
						background: 'royalblue',
						height: '100vh',
						width: '90vw',
						margin: '0 auto',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<AnimatedButton onClick={() => setShow((prev) => !prev)}>
						Rotate
					</AnimatedButton>
				</div>
				<div
					style={{
						position: 'fixed',
						top: '60%',
						right: '45%',
						border: '1px solid black',
						padding: '20px',
						borderRadius: '8px',
					}}
				>
					<RotateAndSlideIn show={show}>Rotate Animation</RotateAndSlideIn>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={5} speed={0.5}>
				<div
					style={{
						background: 'purple',
						height: '100%',

						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				></div>
				<div
					onMouseEnter={() => setShowTrail((prev) => !prev)}
					onMouseLeave={() => setShowTrail((prev) => !prev)}
					style={{
						color: 'white',
						position: 'fixed',
						top: '40%',
						right: '50%',
						border: '1px solid black',
						padding: '20px',
						borderRadius: '8px',
					}}
				>
					<TrailAnimation show={showTrail} items={items} />
				</div>
			</ParallaxLayer>
		</Parallax>
	);
}

export default Home;
