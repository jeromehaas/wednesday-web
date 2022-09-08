const Anchor = ({ className, children, onClick, href }) => {

    return (
        <a className={` ${ className ? className : '' } anchor `} href={ href ? href : '/' } onClick={ onClick } >{ children }</a>
    );

};

export default Anchor;