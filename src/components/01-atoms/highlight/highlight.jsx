const Highlight = ({ className, children }) => {

    return (
        <span className={` ${ className ? className : '' } highlight highlight--blacks` }>{ children }</span>
    )

};

export default Highlight;