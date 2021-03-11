import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const EditableItem = ({
    to,
    item,
    active = false,
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
                    <span className = "wbdv-editable-item-action-icon">
                        <i className = "fas fa-edit fa-lg"
                           onClick = {() => setEditing(true)}/>
                    </span>
                </>
            }
            {
                editing &&
                <>
                    <input value = {itemCache.title}
                           onChange = {(e) => setItemCache({...itemCache,
                                                                                            title: e.target.value})}/>
                    <span className = "wbdv-editable-item-action-icon">
                        <i className = "fas fa-check fa-lg"
                           onClick = {() => {
                               setEditing(false)
                               updateItem(itemCache)
                           }}
                        />
                    </span>
                    <span className = "wbdv-editable-item-action-icon">
                        <i className = "fas fa-times fa-lg"
                           onClick = {() => deleteItem(item)}/>
                    </span>
                </>
            }
        </>
    )
}

export default EditableItem