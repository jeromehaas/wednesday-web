import Anchor from 'components/01-atoms/anchor/anchor';
import Button from 'components/01-atoms/button/button';
import Heading from 'components/01-atoms/heading/heading';
import Highlight from 'components/01-atoms/highlight/highlight';
import ListItem from 'components/01-atoms/list-item/list-item';
import DesktopNavigation from 'components/03-molecules/desktop-navigation/desktop-navigation';
import MetamaskStatus from 'components/01-atoms/metamask-status/metamask-status';

const Hero = () => {

    return (
        <div className="hero">
            <div className="hero__inner">
                <div className="hero__content content">
                    <Heading className="content__heading" level="h1">Finally $WEDnesday</Heading>
                    <Heading className="content__text" level="h3">
                        $WED<Highlight> is a </Highlight>web 3 experiment<Highlight> of a </Highlight>useless token<Highlight> that has an </Highlight>innovative staking <Highlight> that you </Highlight>track in real time in your wallet<Highlight> and with a </Highlight>huge APY<Highlight></Highlight>
                    </Heading>
                    <Button>Jump in now</Button>
                </div>
            </div>
        </div>
    );

};

export default Hero;
