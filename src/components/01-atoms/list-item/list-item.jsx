const ListItem = ({ className, children }) => {

    return (
        <p className={` ${ className ? className : '' } list-item` }>{ children }</p>
    )

};

export default ListItem;