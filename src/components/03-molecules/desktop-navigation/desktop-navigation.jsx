import MetamaskStatus from "components/01-atoms/metamask-status/metamask-status";
import gsap from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
const plugins = [ScrollToPlugin];

const DesktopNavigation = () => {
    

    const scrollToSection = ( event, target ) => {
        event.preventDefault();
        const section = document.querySelector(target);
        section.scrollIntoView({ behavior: 'smooth'});
    };


    return (
        <div className="desktop-navigation section">

            <div className="desktop-navigation__inner section__inner">

            <div className="desktop-navigation__logo logo">
                $WED 
            </div>

            <div className="desktop-navigation__links links">
                <a className="links__item anchor" href="/" onClick={ (event) => scrollToSection(event, '.telegram-teaser') }>About</a>
                <a className="links__item anchor" href="/" onClick={ (event) => scrollToSection(event, '.process') }>Experiment</a>
                <a className="links__item anchor" href="/" onClick={ (event) => scrollToSection(event, '.launch-countdown') }>Roadmap</a>
                <a className="links__item anchor" href="/" onClick={ (event) => scrollToSection(event, '.staking-countdown') }>Tokenomics</a>
            </div>

            <div className="desktop-navigation__metamask metamask">
                <MetamaskStatus />
            </div>

            </div>

        </div>
    );

};

export default DesktopNavigation;