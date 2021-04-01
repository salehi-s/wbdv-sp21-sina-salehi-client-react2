import React from 'react'

const ImageWidget = ({widget, setWidget, editing}) => {
    return(
        <div className = "container-fluid">
            <h3>Image Widget</h3>
            {
                editing &&
                    <div className = "container-fluid">
                        <div className = "container-fluid wbdv-imagewidget-image-container">
                            <div className = "container-fluid wbdv-widget-field">
                                <img src = {widget.url}
                                     width = {widget.width}
                                     height = {widget.height}/>
                            </div>
                        </div>
                        <div className = "container-fluid wbdv-imagewidget-options-container">
                            <div className = "container-fluid wbdv-widget-field">
                                <select className = "form-control"
                                        value = {widget.type}
                                        onChange = {(e) => setWidget(widget => ({...widget,
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
                                       value = {widget.url}
                                       onChange = {(e) => setWidget(widget => ({...widget,
                                                                                                          url: e.target.value}))}/>
                            </div>
                            <div className = "container-fluid wbdv-widget-field">
                                Image Width
                                <input className = "form-control"
                                       type = "number"
                                       value = {widget.width}
                                       onChange = {(e) => setWidget(widget => ({...widget,
                                                                                                          width: e.target.value}))}/>
                            </div>
                            <div className = "container-fluid wbdv-widget-field">
                                Image Height
                                <input className = "form-control"
                                       type = "number"
                                       value = {widget.height}
                                       onChange = {(e) => setWidget(widget => ({...widget,
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