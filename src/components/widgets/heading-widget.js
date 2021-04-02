import React from 'react'

const HeadingWidget = ({widget, widgetObject, setWidget, editing}) =>
    <div className = "container-fluid">

        {widget.size === 1 && <h1>{widget.text}</h1>}
        {widget.size === 2 && <h2>{widget.text}</h2>}
        {widget.size === 3 && <h3>{widget.text}</h3>}
        {widget.size === 4 && <h4>{widget.text}</h4>}
        {widget.size === 5 && <h5>{widget.text}</h5>}
        {widget.size === 6 && <h6>{widget.text}</h6>}

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
                        <input className = "form-control"
                               value = {widgetObject.text}
                               onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                        text: e.target.value}))}/>
                    </div>
                    <div className = "container-fluid wbdv-widget-field">
                        <select className = "form-control"
                                value = {widgetObject.size}
                                onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                          size: parseInt(e.target.value)}))}>
                            <option value = {1}>Heading 1</option>
                            <option value = {2}>Heading 2</option>
                            <option value = {3}>Heading 3</option>
                            <option value = {4}>Heading 4</option>
                            <option value = {5}>Heading 5</option>
                            <option value = {6}>Heading 6</option>
                        </select>
                    </div>
                </div>
        }
    </div>

export default HeadingWidget