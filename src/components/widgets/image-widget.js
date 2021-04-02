import React from 'react'

const ImageWidget = ({widget, widgetObject, setWidget, editing}) =>
    <div className = "container-fluid">
        {
            editing &&
                <div className = "container-fluid">
                    <div className = "container-fluid wbdv-widget-field">
                        Widget Type
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
                        Image URL
                        <input className = "form-control"
                               value = {widgetObject.url}
                               placeholder = "Enter the URL of the image here."
                               onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                        url: e.target.value}))}/>
                    </div>
                    <div className = "container-fluid wbdv-widget-field">
                        Image Width
                        <input className = "form-control"
                               type = "number"
                               value = {widgetObject.width}
                               placeholder = "Enter the horizontal resolution of the image here."
                               onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                        width: e.target.value}))}/>
                    </div>
                    <div className = "container-fluid wbdv-widget-field">
                        Image Height
                        <input className = "form-control"
                               type = "number"
                               value = {widgetObject.height}
                               placeholder = "Enter the vertical resolution of the image here."
                               onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                        height: e.target.value}))}/>
                    </div>
                </div>
        }
        {
            !editing &&
                <div className = "container-fluid">
                    <div className = "container-fluid wbdv-widget-field">
                        <img src = {widget.url}
                             width = {widget.width}
                             height = {widget.height}/>
                    </div>
                </div>
        }
    </div>

export default ImageWidget