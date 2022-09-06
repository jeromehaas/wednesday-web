const Heading = ({ children, className, level, looklike }) => {

	switch(level) {
		case 'h1': return <h1 className={` ${ className ? className : '' } heading heading--${ looklike ? looklike : level }`}>{ children }</h1>
		case 'h2': return <h2 className={` ${ className ? className : '' } heading heading--${ looklike ? looklike : level }`}>{ children }</h2>
		case 'h3': return <h3 className={` ${ className ? className : '' } heading heading--${ looklike ? looklike : level }`}>{ children }</h3>
		case 'h4': return <h4 className={` ${ className ? className : '' } heading heading--${ looklike ? looklike : level }`}>{ children }</h4>
		default: return <h1 className={` ${ className ? className : '' } heading heading--${ looklike ? looklike : level }`}>{ children }</h1>
	};

};

export default Heading;