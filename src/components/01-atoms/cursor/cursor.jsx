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

    const moveMain = () => {
        gsap.to(mainRef.current, {
            x: position.current.x,
            y: position.current.y,
						ease: 'power1.easeIn',
            duration: 0.05,
        });
    };

    const moveFollower = () => {
        gsap.to(followerRef.current, {
            x: position.current.x,
            y: position.current.y,
						ease: 'power1.inOut',
						duration: 0.1
        });
    };

		const hideFollower = () => {
			followerRef.current.classList.add('cursor__follower--hidden');
		};

		const showFollower = () => {
			setTimeout(() => {
				followerRef.current.classList.remove('cursor__follower--hidden');
			}, 500);
		};

		const ligthenFollower = () => {
			followerRef.current.classList.add('cursor__follower--light');
		}

		const normalizeFollower = () => {
			followerRef.current.classList.remove('cursor__follower--light');
		}

    useEffect(() => {
				document.querySelectorAll('.button').forEach((button) => button.addEventListener('pointerenter', hideFollower ));
				document.querySelectorAll('.button').forEach((button) => button.addEventListener('pointerleave', showFollower ));
				document.querySelectorAll('.anchor').forEach((button) => button.addEventListener('pointerenter', ligthenFollower ));
				document.querySelectorAll('.anchor').forEach((button) => button.addEventListener('pointerleave', normalizeFollower ));
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