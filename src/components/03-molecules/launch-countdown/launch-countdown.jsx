import Heading from "components/01-atoms/heading/heading";
import Highlight from "components/01-atoms/highlight/highlight";

const LaunchCountdown = () => {

	return (
		<div className="launch-countdown section">
			<div className="launch-countdown__inner section__inner">
				<Heading className="launch-countdown__heading" level="h2">
					<Highlight color="red" borderColor="white">$WED launch </Highlight>countdown
				</Heading>
			</div>
		</div>
	);

};

export default LaunchCountdown;