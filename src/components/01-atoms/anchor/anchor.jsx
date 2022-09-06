const Anchor = ({ className, children, onClick }) => {

    return (
        <a className={` ${ className ? className : '' } anchor `} onClick={ onClick } >{ children }</a>
    );

};

export default Anchor;