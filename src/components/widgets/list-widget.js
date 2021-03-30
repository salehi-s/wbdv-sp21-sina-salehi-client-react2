import React from 'react'

const ListWidget = ({widget, setWidget, editing}) => {
    return(
        <div className = "container-fluid">
            <h2>List Widget</h2>
            {
                editing &&
                    <div className = "container-fluid">
                        <input type = "checkbox"/> Ordered
                        <br/>
                        List Items
                        <textarea className = "form-control"
                                  value = {widget.text}
                                  rows = {10}>

                        </textarea>
                    </div>
            }
            {
                !editing &&
                    <ul>
                        {
                            widget.text.split("\n").map(item => {
                                return(
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
            }
        </div>
    )
}

export default ListWidget