import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setWidget, editing}) => {
    return (
        <div className = "container-fluid">
            <h3>Paragraph Widget</h3>

            {
                editing &&
                    <div className = "container-fluid">
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
                            <textarea className = "form-control"
                                      value = {widget.text}
                                      onChange = {(e) => setWidget({...widget,
                                                                                                text: e.target.value})}/>
                        </div>
                    </div>
            }
            {
                !editing &&
                    <div className = "container-fluid">
                        <p>
                            {widget.text}
                        </p>
                    </div>
            }
        </div>
    )
}

export default ParagraphWidget