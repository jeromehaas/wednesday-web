import { useState, useRef } from 'react';
import Hamburger from 'components/01-atoms/hamburger/hamburger';

const MobileNavigation = () => {

	const [ status, setStatus ] = useState('inactive');
	const navigationRef = useRef();

	const toggleStatus = () => {
		console.log('hello')
		setStatus( status === 'inactive' ? 'active' : 'inactive');
	};

	return (
		<div className={`mobile-navigation ${ status === 'active' ? 'mobile-navigation--active' : '' }`} ref={ navigationRef }>
			<div className="mobile-navigation__inner">
				
				<div className="mobile-navigation__bar bar section">
					<div className="bar__inner section__inner">
						<p className="bar__logo">$WED</p>
						<Hamburger status={ status } onClick={ toggleStatus } />
					</div>
				</div>

				<div className="mobile-navigation__menu menu">
					<div className="menu__background-layer menu__background-layer--one"></div>
					<div className="menu__background-layer menu__background-layer--two"></div>
					<div className="menu__background-layer menu__background-layer--three"></div>
				</div>

			</div>
		</div>
	);

};

export default MobileNavigation;