import React from 'react'

const ParagraphWidget = ({widget, widgetObject, setWidget, editing}) =>
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
                        Paragraph Text
                        <textarea className = "form-control"
                                  value = {widgetObject.text}
                                  onChange = {(e) => setWidget({...widgetObject,
                                                                                            text: e.target.value})}/>
                    </div>
                </div>
        }
        {
            !editing &&
                <div className = "container-fluid">
                    <div className = "container-fluid wbdv-widget-field">
                        <p>{widget.text}</p>
                    </div>
                </div>
        }
    </div>

export default ParagraphWidget