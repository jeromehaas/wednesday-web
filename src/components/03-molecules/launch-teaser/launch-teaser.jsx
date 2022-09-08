import Heading from "components/01-atoms/heading/heading";
import Button from "components/01-atoms/button/button";
import Highlight from "components/01-atoms/highlight/highlight";

const LaunchTeaser = () => {

	return (
		<div className="launch-teaser section">
			<div className="launch-teaser__inner section__inner">
				<Heading className="launch-teaser__heading" level="h3">
					Run baby run! <Highlight color="white"  borderColor="black" >The </Highlight>experiment will be<Highlight color="white"  borderColor="black" > will be </Highlight> launched <Highlight color="white"  borderColor="black" > on </Highlight> 11.11.2023
				</Heading>
				<Button className="launch-teaser__button">Telegram Chat</Button>	
			</div>
		</div>
	);

};

export default LaunchTeaser;