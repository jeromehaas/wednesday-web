import { Component, createRef, useState, useEffect } from 'react';
import Lottie from 'assets/lotties/hamburger.json';
import { Player } from '@lottiefiles/react-lottie-player';

const Hamburger = ({ status, onClick }) => {

	const hamburgerRef = createRef();
	const lottie = Lottie;

	useEffect(() => {
		hamburgerRef.current.setPlayerDirection( status === 'active' ? 1 : -1)
		hamburgerRef.current.play();
	}, [ status, hamburgerRef ]);

		return(
			<button className="hamburger" onClick={ onClick }>
				<Player 
					ref={ hamburgerRef }
					autoplay={ false }
					speed= { 3 }
					direction={ 1 }
					keepLastFrame= { true }
					loop={ false }
					controls={ true }
					src={ lottie }
					/>
			</button>
		)

};

export default Hamburger;