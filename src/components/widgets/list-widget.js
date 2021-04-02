import React from 'react'

const ListWidget = ({widget, widgetObject, setWidget, editing, ordered}) => {

    return(
        <div className = "container-fluid">
            {
                editing &&
                    <div className = "container-fluid">
                        <div className = "container-fluid wbdv-widget-field">
                            <select className = "form-control"
                                    value = {widgetObject.type}
                                    onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                              type: e.target.value}))}>
                                <option value = {"HEADING"}>Heading</option>
                                <option value = {"PARAGRAPH"}>Paragraph</option>
                                <option value = {"LIST"}>List</option>
                                <option value = {"IMAGE"}>Image</option>
                            </select>
                        </div>
                        <div className = "container-fluid wbdv-widget-field">
                            <input type = "checkbox"
                                   id = "orderedCheckbox"
                                   checked = {ordered}
                                   onClick = {() => setWidget(widgetObject => ({...widgetObject,
                                                                                ordered: !ordered}))}/> Ordered
                        </div>
                        <div className = "container-fluid wbdv-widget-field">
                            List Items
                            <textarea className = "form-control"
                                      value = {widgetObject.text}
                                      onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                                  text: e.target.value}))}
                                      rows = {10}>
                            </textarea>
                        </div>
                    </div>
            }
            {
                !editing &&
                    <>
                        {
                            widget.ordered &&
                                <div className = "container-fluid wbdv-widget-field">
                                    <ol>
                                        {
                                            widget && widget.text &&
                                                widget.text.split("\n").map(item => {
                                                    return(
                                                        <li>{item}</li>
                                                    )
                                                })
                                        }
                                    </ol>
                                </div>
                        }
                        {
                            !widget.ordered &&
                                <div className = "container-fluid wbdv-widget-field">
                                    <ul>
                                        {
                                            widget && widget.text &&
                                                widget.text.split("\n").map(item => {
                                                    return(
                                                        <li>{item}</li>
                                                    )
                                                })
                                        }
                                    </ul>
                                </div>
                        }
                    </>
            }
        </div>
    )
}

export default ListWidget