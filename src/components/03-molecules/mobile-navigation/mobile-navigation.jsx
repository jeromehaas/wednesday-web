import { useState, useRef, useEffect } from 'react';
import Hamburger from 'components/01-atoms/hamburger/hamburger';
import gsap from 'gsap';
import Highlight from 'components/01-atoms/highlight/highlight';

const MobileNavigation = () => {

	const [ status, setStatus ] = useState('inactive');
	const navigationRef = useRef();
	const backgroundLayerOneRef = useRef();
	const backgroundLayerTwoRef = useRef();
	const backgroundLayerThreeRef = useRef();
	const linksContainerRef = useRef();
	
	const toggleStatus = () => {
		if (status === 'active') hideMenu();
		if (status === 'inactive') showMenu();
		setStatus( status === 'inactive' ? 'active' : 'inactive');
	};

	const showMenu = () => {
		const timeline = gsap.timeline();
		const links = linksContainerRef.current.querySelectorAll('.menu__link');
		timeline.to(backgroundLayerOneRef.current, { width: '100%', duration: 0.3 });
		timeline.to(backgroundLayerTwoRef.current, { width: '100%', duration: 0.3 });
		timeline.to(backgroundLayerThreeRef.current, { width: '100%', duration: 0.3 });
		timeline.to(linksContainerRef.current, { left: '0%', duration: 0 } )
		timeline.to(links, { opacity: 1, stagger: 0.1, duration: 0.4 })
	};
	
	const hideMenu = () => {
		const timeline = gsap.timeline();
		const links = linksContainerRef.current.querySelectorAll('.menu__link');
		timeline.to(links, { opacity: 0, stagger: 0.1, duration: 0.4 })
		timeline.to(linksContainerRef.current, { left: '100%', duration: 0.3 } )
		timeline.to(backgroundLayerThreeRef.current, { width: '0%', duration: 0.3 });
		timeline.to(backgroundLayerTwoRef.current, { width: '0%', duration: 0.3 });
		timeline.to(backgroundLayerOneRef.current, { width: '0%', duration: 0.3 });
	};

	const scrollToSection = (event, target) => {
        event.preventDefault();
        const section = document.querySelector(target);
        section.scrollIntoView({ behavior: 'smooth'});
	};

	
	useEffect(() => {
	}, []);

	return (
		<div className='mobile-navigation' ref={ navigationRef }>
			<div className="mobile-navigation__inner">
				
				<div className="mobile-navigation__bar bar section">
					<div className="bar__inner section__inner">
						<p className="bar__logo" onClick={ (event) => scrollToSection(event, '.hero')}>$WED</p>
						<Hamburger status={ status } onClick={ toggleStatus } />
					</div>
				</div>

				<div className="mobile-navigation__menu menu section">
					<div className="menu__inner section__inner menu__links-container" ref={ linksContainerRef }>
						<a href="#" className="menu__link" onClick={ (event) => { scrollToSection(event, '.telegram-teaser'); hideMenu(); toggleStatus(); } }><Highlight color="black" borderColor="white" >About</Highlight></a>
						<a href="#" className="menu__link" onClick={ (event) => { scrollToSection(event, '.process'); hideMenu(); toggleStatus(); } }><Highlight color="black" borderColor="white" >Experiment</Highlight></a>
						<a href="#" className="menu__link" onClick={ (event) => { scrollToSection(event, '.launch-countdown'); hideMenu(); toggleStatus(); } }><Highlight color="black" borderColor="white" >Roadmap</Highlight></a>
						<a href="#" className="menu__link" onClick={ (event) => { scrollToSection(event, '.staking-countdown'); hideMenu(); toggleStatus(); } }><Highlight color="black" borderColor="white">Tokenomics</Highlight></a>
					</div>
					<div className="menu__background-layer menu__background-layer--one" ref={ backgroundLayerOneRef }></div>
					<div className="menu__background-layer menu__background-layer--two" ref={ backgroundLayerTwoRef }></div>
					<div className="menu__background-layer menu__background-layer--three" ref={ backgroundLayerThreeRef }></div>
				</div>

			</div>
		</div>
	);

};

export default MobileNavigation;