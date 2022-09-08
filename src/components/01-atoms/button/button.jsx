const Button = ({ className, children, href }) => {

    return (
        <a className={` ${className ? className : ''} button `} href={ href ? href : '/' }>{ children }</a>
    );

};

export default Button;