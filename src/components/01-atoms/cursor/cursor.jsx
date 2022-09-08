 import { useRef, useEffect } from 'react';
 import { gsap } from 'gsap';

 const Cursor = () => {

    // const [ position, setPosition ] = useState({
    //     x: null,
    //     y: null
    // });

    const mainRef = useRef();
    const followerRef = useRef(); 
    const position = useRef({
        x: null,
        y: null
    });

    const updateCursorPosition = (event) => {
        console.log('updated');
        position.current.x = event.clientX;
        position.current.y = event.clientY;
        console.log(position);
        moveMain();
        moveFollower();
    };

    const moveMain = () => {
        console.log('move the main');
        gsap.to(mainRef.current, {
            x: position.current.x,
            y: position.current.y,
            duration: 0.1,
        });
    };

    const moveFollower = () => {
        console.log('move the main');
        gsap.to(followerRef.current, {
            x: position.current.x,
            y: position.current.y,
            duration: 0.6,
        });
    };

    useEffect(() => {
        window.addEventListener('pointermove', updateCursorPosition);
    });


    return (
        <div className="cursor">
		    <div className="cursor__main" ref={ mainRef }></div>
		    <div className="cursor__follower" ref={ followerRef }></div>
	    </div>
    );

};

export default Cursor;