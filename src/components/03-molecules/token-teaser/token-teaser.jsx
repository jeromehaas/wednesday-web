import Heading from "components/01-atoms/heading/heading";
import Highlight from "components/01-atoms/highlight/highlight";
import Button from "components/01-atoms/button/button";
import Globe from "components/01-atoms/globe/globe";

const TokenTeaser = () => {

	return (
		<div className="token-teaser section">
			<div className="token-teaser__inner section__inner">
				<Heading className="token-teaser__heading" level="h2">Moon or abysm?</Heading>	
				<Heading className="token-teaser__text" level="h3">
            $WED<Highlight borderColor="black"> is a </Highlight>test-bed<Highlight borderColor="black"> to see how this </Highlight>auto staking<Highlight borderColor="black"> in your wallet with </Highlight>real time info<Highlight borderColor="black"> will </Highlight>influence people FOMO in 60 days.
        </Heading>
				<Button className="token-teaser__button">Buy more $WED</Button>
				<Globe className="token-teaser__globe" />
			</div>
		</div>
	)

};

export default TokenTeaser;