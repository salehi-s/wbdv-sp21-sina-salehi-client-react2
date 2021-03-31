import React from 'react'

const ImageWidget = ({widget, setWidget, editing}) => {
    return(
        <div className = "container-fluid">
            <h3>Image Widget</h3>
            {
                editing &&
                    <div className = "container-fluid">
                        <div className = "container-fluid wbdv-imagewidget-image-container">
                            <img src = {widget.url}
                                 width = {widget.width}
                                 height = {widget.height}/>
                        </div>
                        <div className = "container-fluid wbdv-imagewidget-options-container">
                            Image URL
                            <input className = "form-control"
                                   value = {widget.url}
                                   onChange = {(e) => setWidget(widget => ({...widget,
                                                                                                      url: e.target.value}))}/>
                            Image Width
                            <input className = "form-control"
                                   type = "number"
                                   value = {widget.width}
                                   onChange = {(e) => setWidget(widget => ({...widget,
                                                                                                      width: e.target.value}))}/>
                            Image Height
                            <input className = "form-control"
                                   type = "number"
                                   value = {widget.height}
                                   onChange = {(e) => setWidget(widget => ({...widget,
                                                                                                      height: e.target.value}))}/>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ImageWidget