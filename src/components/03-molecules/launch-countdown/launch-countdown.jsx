import Heading from "components/01-atoms/heading/heading";
import Highlight from "components/01-atoms/highlight/highlight";
import useCountdown from "hooks/use-countdown";
import { useEffect } from 'react'

const LaunchCountdown = () => {

	const { seconds, minutes, hours, days } = useCountdown('2022-09-20'); 

	useEffect(() => updateUnit(seconds === 0 ? 60 : seconds, 'seconds'), [seconds]);
	useEffect(() => updateUnit(minutes, 'minutes'), [minutes]);
	useEffect(() => updateUnit(hours, 'hours'), [hours]);
	useEffect(() => updateUnit(days, 'days'), [days]);
	useEffect(() => { 
		updateUnit(seconds, 'seconds') 
		updateUnit(hours, 'hours') 
		updateUnit(minutes, 'minutes') 
		updateUnit(days, 'days') 
	}, []);

	const updateUnit = (value, unit) => {
		const container = document.querySelector(`.launch-countdown .counter__unit--${ unit } .unit__container`);
		const allElements = container.querySelectorAll('.unit__item')
		const newElement = document.createElement('div');
		newElement.classList.add('unit__item');
		newElement.innerText = value;
		container.prepend(newElement);
		allElements.forEach((element, index)=> index > 1 && element.remove());
	};
	

	return (
		<div className="launch-countdown section">
			<div className="launch-countdown__inner section__inner">
				<Heading className="launch-countdown__heading" level="h2">
					<Highlight color="red" borderColor="white">$WED launch </Highlight>countdown
				</Heading>
				<div className="launch-countdown__counter counter">
					<div className="counter__inner">
						<div className="counter__unit counter__unit--days unit">
							<div className="unit__container container"></div>
							<div className="unit__label">Days</div>
						</div>
						<div className="counter__unit counter__unit--hours unit">
							<div className="unit__container container"></div>
							<div className="unit__label">Hours</div>
						</div>
						<div className="counter__unit counter__unit--minutes unit">
							<div className="unit__container container"></div>
							<div className="unit__label">Minutes</div>
						</div>
						<div className="counter__unit counter__unit--seconds unit">
							<div className="unit__container container"></div>
							<div className="unit__label">Seconds</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

};

export default LaunchCountdown;