import Heading from "components/01-atoms/heading/heading";
import Button from "components/01-atoms/button/button";

const TelegramTeaser = () => {

	return (
		<div className="telegram-teaser section">
			<div className="telegram-teaser__inner section__teaser">
				<Heading className="telegram-teaser__heading" level="h2">Be part of this disruptive experiment</Heading>
				<Button className="telegram-teaser__button">Telegram Chat</Button>	
			</div>
		</div>
	);

};

export default TelegramTeaser;