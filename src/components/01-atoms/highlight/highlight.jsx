const Highlight = ({ className, children, color, borderColor }) => {

    return (
        <span className={` ${ className ? className : '' } highlight ${  color ? `highlight highlight__color--${ color }` : ''} ${ borderColor ? `highlight__border-color--${ borderColor }`: ''} `}>{ children }</span>
    )

};

export default Highlight;