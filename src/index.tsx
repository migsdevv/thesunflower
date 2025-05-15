import { render } from 'preact';
import { useState, useRef } from 'preact/hooks';
import './style.css';
import sunflower from './assets/sunflower.svg';
import rose from './assets/rose.svg';

export function App() {
	const [step, setStep] = useState(0);
	const [fadeOut, setFadeOut] = useState(false);
	const noButtonRef = useRef(null);

	const transitionTo = (nextStep) => {
		setFadeOut(true);
		setTimeout(() => {
			setStep(nextStep);
			setFadeOut(false);
		}, 500);
	};

	const moveNoButton = () => {
		const btn = noButtonRef.current;
		if (btn) {
			const btnWidth = btn.offsetWidth;
			const btnHeight = btn.offsetHeight;
			const padding = 20;
	
			const maxX = window.innerWidth - btnWidth - padding;
			const maxY = window.innerHeight - btnHeight - padding;
	
			const x = Math.random() * maxX;
			const y = Math.random() * maxY;
	
			btn.style.position = 'fixed';
			btn.style.left = `${x}px`;
			btn.style.top = `${y}px`;
		}
	};

	return (
		<div
			className={`relative py-12 flex flex-col justify-center items-center text-center px-4 min-h-screen transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
		>
			{step === 0 && (
				<>
					<span class="text-3xl font-bold mb-4 text-white">hi :&gt; click on the sunflower</span>
					<img
						src={sunflower}
						alt="Sunflower"
						onClick={() => transitionTo(1)}
						class="transition-all w-12 h-12 hover:h-14 hover:w-14 hover:rotate-12 hover:cursor-pointer"
					/>
				</>
			)}

			{step === 1 && (
				<>
					<span class="text-2xl font-bold mb-6 text-white">
						hello, mimi! i know this is quite corny and frankly.. it is<br />
						pero i have something i want to tell you<br /><br />
						click on the rose :3
					</span>
					<img
						src={rose}
						alt="Rose"
						onClick={() => transitionTo(2)}
						class="transition-all w-12 h-12 hover:h-14 hover:w-14 hover:rotate-12 hover:cursor-pointer"
					/>
				</>
			)}

			{step === 2 && (
				<div class="flex flex-col items-center gap-6 max-w-[640px] text-wrap">
					<p class="text-xl font-medium text-white text-justify leading-relaxed drop-shadow-md">
						Sunflowers represent positivity, adoration, and loyalty. I like them because of their bright colors, and they've been my favorite since I was little.
						<br /><br />
						"Sunflowers are my favorite", you said.
						<br /><br />
						I was surprised that we shared the same favorite flower. It made me feel more connected with you.
						<br /><br />
						Yellow was a color I despised in the past because of its "overpowering" brightness. But, recently.. something changed. That same brightness, that I used to dislike, became the reason that I started to like it.. and recently, I started to like it more.. because of you.
						<br /><br />
						Because of you, I started liking yellow. Because of you, the brightness that I deemed overpowering became something I wholeheartedly embrace. Because of you, I started believing in love, in doing everything in the name of love, of pouring my entire heart onto love.
						<br /><br />
						You are my sunflower, someone I view positively, someone I adore, and someone I owe full loyalty to.<br />
						You are my yellow, someone who makes everything brighter with your odd humor, chaotic personality, laughs, and smiles.
						<br /><br />
						Consider this a formal confession of feelings and intentions. I love you. I truly do. I intend this to be serious... not just something casual, not something ambiguous, but something genuine... <br /><br />

						<span class="text-2xl font-bold text-yellow-300">May I court you? 🌻</span>
					</p>

					<div class="flex gap-4 mt-6 relative">
						<button
							class="px-6 py-3 rounded-full bg-pink-500 text-white text-lg font-semibold shadow-lg hover:bg-pink-600 transition-all"
							onClick={() => alert('Yay! 💖')}
						>
							Yes 💌
						</button>

						<button
							ref={noButtonRef}
							onMouseEnter={moveNoButton}
							class="px-6 py-3 rounded-full bg-gray-300 text-gray-800 text-lg font-semibold shadow-md transition-all z-50"
						>
							No 🙈
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

render(<App />, document.getElementById('app'));
