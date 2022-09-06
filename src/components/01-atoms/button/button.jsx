const Button = ({ className, children }) => {

    return (
        <a className={` ${className ? className : ''} button `}>{ children }</a>
    );

};

export default Button;