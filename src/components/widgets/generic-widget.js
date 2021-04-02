import React, {useState} from 'react'

const GenericWidget = ({
    item,
    updateItem,
    deleteItem
}) => {

    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)

    return(
        <>
            {
                editing &&
                    <>
                        <div className = "container-fluid">
                            <span className = "wbdv-editable-item-action-icon float-right">
                                <i className = "fas fa-trash fa-2x float-right wbdv-editable-item-action-icon"
                                   onClick = {() => deleteItem(item)}/>
                                <i className = "fas fa-check fa-2x float-right wbdv-editable-item-action-icon"
                                   onClick = {() => {
                                       setEditing(false)
                                       updateItem(itemCache)
                                   }}/>
                            </span>
                            <div className = "container-fluid wbdv-widget-field">
                                <select className = "form-control"
                                        value = {itemCache.type}
                                        onChange = {(e) => setItemCache({...itemCache,
                                                                                                         type: e.target.value})}>
                                    <option value = {"HEADING"}>Heading</option>
                                    <option value = {"PARAGRAPH"}>Paragraph</option>
                                    <option value = {"LIST"}>List</option>
                                    <option value = {"IMAGE"}>Image</option>
                                </select>
                            </div>
                        </div>
                    </>
            }
            {
                !editing &&
                    <>
                        <div className = "container-fluid">
                            <span className = "wbdv-editable-item-action-icon float-right">
                                <i className = "fas fa-cog fa-2x float-right wbdv-editable-item-action-icon"
                                   onClick = {() => {setEditing(false)}}/>
                            </span>
                        </div>
                    </>
            }
        </>
    )
}

export default GenericWidget