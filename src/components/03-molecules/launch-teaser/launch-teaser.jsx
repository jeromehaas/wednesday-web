import Heading from "components/01-atoms/heading/heading";
import Button from "components/01-atoms/button/button";

const LaunchTeaser = () => {

	return (
		<div className="launch-teaser section">
			<div className="launch-teaser__inner section__inner">
				<Heading className="launch-teaser__heading" level="h2">
				Run baby run! The experiment will be launch 11.11.2023
				</Heading>
				<Button className="launch-teaser__button">Telegram Chat</Button>	
			</div>
		</div>
	);

};

export default LaunchTeaser;