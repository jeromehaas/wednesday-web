import Button from 'components/01-atoms/button/button';
import Heading from 'components/01-atoms/heading/heading';
import Highlight from 'components/01-atoms/highlight/highlight';
import Globe from 'components/01-atoms/globe/globe';

const Hero = () => {

    return (
        <div className="hero">
            <div className="hero__inner">
                <div className="hero__content content">
                    <Heading className="content__heading" level="h1">Finally <Highlight color="red">$WEDnesday :)</Highlight></Heading>
                    <Heading className="content__text" level="h3">
                        $WED<Highlight borderColor="black"> is a </Highlight>web 3 experiment<Highlight borderColor="black"> of a </Highlight>useless token<Highlight borderColor="black"> that has an </Highlight>innovative staking <Highlight borderColor="black"> that you </Highlight>track in real time in your wallet<Highlight borderColor="black"> and with a </Highlight>huge APY<Highlight></Highlight>
                    </Heading>
                    <Button>Jump in now</Button>
										<Globe className="hero__globe" />
                </div>
            </div>
        </div>
    );

};

export default Hero;
