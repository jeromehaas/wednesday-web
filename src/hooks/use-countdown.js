import { useState, useEffect } from 'react'

const useCountdown = () => {

	const targetDate = 	new Date('2022-09-20').getTime();
	
	const [ countdown, setCountdown ] = useState(targetDate - new Date().getTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown(targetDate - new Date().getTime());
			return () => clearInterval(interval);
		}, 1000);
	}, [targetDate]);

	const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
	const hours = Math.floor(countdown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	const minutes = Math.floor((countdown % (1000 * 60 * 60 )) / (1000 * 60));
	const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

	return {
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	};

};

export default useCountdown;