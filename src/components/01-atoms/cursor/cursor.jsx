 import { useRef, useEffect } from 'react';
 import { gsap } from 'gsap';

 const Cursor = () => {

    const mainRef = useRef();
    const followerRef = useRef(); 
    const position = useRef({
        x: null,
        y: null
    });

    const updateCursorPosition = (event) => {
        position.current.x = event.clientX;
        position.current.y = event.clientY;
        moveMain();
        moveFollower();
    };

    const moveMain = () =>  gsap.to(mainRef.current, { x: position.current.x, y: position.current.y, ease: 'elastic.easeIn', duration: 0.1 });
    const moveFollower = () => gsap.to(followerRef.current, { x: position.current.x, y: position.current.y, ease: 'power1.easeInOut', duration: 1 });
    const hideFollower = () => gsap.to(followerRef.current, { width: 0, height: 0, border: 0 });
    const showFollower = () => gsap.to(followerRef.current, { width: 32, height: 32, border: '2px solid #ffffff', delay: 0.3 })
    const ligthenFollower = () => gsap.to(followerRef.current, { width: 64, height: 64, backgroundColor: '#c6c6c6', delay: 0.3, border: 0, opacity: 0.2 })
    const normalizeFollower = () => gsap.to(followerRef.current, { width: 32, height: 32, backgroundColor: '#ff0000',  border: '2px solid #ffffff', delay: 0.3 , opacity: 1 })

    useEffect(() => {
        document.querySelectorAll('.button').forEach((button) => button.addEventListener('pointerenter', hideFollower ));
        document.querySelectorAll('.button').forEach((button) => button.addEventListener('pointerleave', showFollower ));
        document.querySelectorAll('.anchor').forEach((button) => button.addEventListener('pointerenter', ligthenFollower ));
        document.querySelectorAll('.anchor').forEach((button) => button.addEventListener('pointerleave', normalizeFollower ));
        document.querySelectorAll('.hamburger').forEach((button) => button.addEventListener('pointerenter', ligthenFollower ));
        document.querySelectorAll('.hamburger').forEach((button) => button.addEventListener('pointerleave', normalizeFollower ));
        document.querySelectorAll('.metamask-status').forEach((button) => button.addEventListener('pointerenter', ligthenFollower ));
        document.querySelectorAll('.metamask-status').forEach((button) => button.addEventListener('pointerleave', normalizeFollower ));
        window.addEventListener('pointermove', updateCursorPosition);
    }, []);


    return (
        <div className="cursor">
		    <div className="cursor__main" ref={ mainRef }></div>
		    <div className="cursor__follower" ref={ followerRef }></div>
	    </div>
    );

};

export default Cursor;