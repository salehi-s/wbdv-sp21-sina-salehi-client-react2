import React from 'react'

const ListWidget = ({widget, setWidget, editing}) => {

    return(
        <div className = "container-fluid">
            <h3>List Widget</h3>
            {
                editing &&
                    <div className = "container-fluid">
                        <input type = "checkbox"
                               id = "orderedCheckbox"
                               onChange = {(e) => setWidget(widget => ({...widget,
                                                                                                  ordered: document.getElementById("orderedCheckbox").checked}))}/> Ordered
                        <br/>
                        List Items
                        <textarea className = "form-control"
                                  value = {widget.text}
                                  onChange = {(e) => setWidget(widget => ({...widget,
                                                                                                       text: e.target.value}))}
                                  rows = {10}>
                        </textarea>
                    </div>
            }
            {
                !editing &&
                    <>
                        {
                            widget.ordered &&
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
                        }
                        {
                            !widget.ordered &&
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
                        }
                    </>
            }
        </div>
    )
}

export default ListWidget