import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const EditableItem = ({
    to,
    item,
    updateItem,
    deleteItem
}) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link to = {to}>
                        {item.title}
                    </Link>
                    <i className = "fas fa-edit"
                       onClick = {() => setEditing(true)}/>
                </>
            }
            {
                editing &&
                <>
                    <input value = {itemCache.title}
                           onChange = {(e) => setItemCache({...itemCache,
                                                                                            title: e.target.value})}/>
                    <i className = "fas fa-check"
                       onClick = {() => {
                           setEditing(false)
                           updateItem(itemCache)
                       }}
                    />
                    <i className = "fas fa-times"
                       onClick = {() => deleteItem(item)}/>
                </>
            }
        </>
    )
};

export default EditableItem