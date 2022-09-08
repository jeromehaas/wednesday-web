import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Button = ({ className, children, href }) => {

	const buttonRef = useRef();
	const backgroundLayerRef = useRef();

	const showBackgroundLayer = () => {
		buttonRef.current.classList.add('button--active');
	};

	const hideBackgroundLayer = () => {
		buttonRef.current.classList.remove('button--active');
	};


    return (
			<span className="button" ref={ buttonRef } onPointerEnter={ showBackgroundLayer } onPointerLeave={ hideBackgroundLayer } >
				<div className="button__background-layer" ref={ backgroundLayerRef }></div>
        <a className={` ${className ? className : ''} button__link `} href={ href ? href : '/' }>{ children }</a>
			</span>
    );

};

export default Button;