const Highlight = ({ className, children }) => {

    return (
        <span className={` ${ className ? className : '' } highlight highlight--black` }>{ children }</span>
    )

};

export default Highlight;