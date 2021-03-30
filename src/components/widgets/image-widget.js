import React from 'react'

const ImageWidget = ({widget, setWidget, editing}) => {
    return(
        <div className = "container-fluid">
            <h2>Image Widget</h2>
            {
                editing &&
                    <div className = "container-fluid">
                        URL
                        <input className = "form-control"
                               value = {widget.url}/>
                        Width
                        <input className = "form-control"
                               value = {widget.width}/>
                        Height
                        <input className = "form-control"
                               value = {widget.height}/>
                    </div>
            }
        </div>
    )
}

export default ImageWidget