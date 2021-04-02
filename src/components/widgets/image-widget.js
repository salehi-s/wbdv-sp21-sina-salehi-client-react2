import React from 'react'

const ImageWidget = ({widget, widgetObject, setWidget, editing}) => {
    return(
        <div className = "container-fluid">
            {
                editing &&
                    <div className = "container-fluid">
                        {/*<div className = "container-fluid wbdv-imagewidget-image-container">
                            <div className = "container-fluid wbdv-widget-field">
                                <img src = {widget.url}
                                     width = {widget.width}
                                     height = {widget.height}/>
                            </div>
                        </div>*/}
                        <div className = "container-fluid wbdv-imagewidget-options-container">
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
                                Image URL
                                <input className = "form-control"
                                       value = {widgetObject.url}
                                       onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                                url: e.target.value}))}/>
                            </div>
                            <div className = "container-fluid wbdv-widget-field">
                                Image Width
                                <input className = "form-control"
                                       type = "number"
                                       value = {widgetObject.width}
                                       onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                                width: e.target.value}))}/>
                            </div>
                            <div className = "container-fluid wbdv-widget-field">
                                Image Height
                                <input className = "form-control"
                                       type = "number"
                                       value = {widgetObject.height}
                                       onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                                height: e.target.value}))}/>
                            </div>
                        </div>
                    </div>
            }
            {
                !editing &&
                    <div className = "container-fluid wbdv-widget-field">
                        <img src = {widget.url}
                             width = {widget.width}
                             height = {widget.height}/>
                    </div>
            }
        </div>
    )
}

export default ImageWidget