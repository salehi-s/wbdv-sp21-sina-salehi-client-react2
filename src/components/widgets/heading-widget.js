import React from 'react'

const HeadingWidget = ({widget, widgetObject, setWidget, editing}) =>
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
                        Heading Text
                        <input className = "form-control"
                               value = {widgetObject.text}
                               onChange = {(e) => setWidget(widgetObject => ({...widgetObject,
                                                                                                        text: e.target.value}))}/>
                    </div>
                    <div className = "container-fluid wbdv-widget-field">
                        Heading Size
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
        {
            !editing &&
                <div className = "container-fluid">
                    {
                        widget.size === 1 &&
                            <div className = "container-fluid wbdv-widget-field">
                                <h1>{widget.text}</h1>
                            </div>
                    }
                    {
                        widget.size === 2 &&
                            <div className = "container-fluid wbdv-widget-field">
                                <h2>{widget.text}</h2>
                            </div>
                    }
                    {
                        widget.size === 3 &&
                            <div className = "container-fluid wbdv-widget-field">
                                <h3>{widget.text}</h3>
                            </div>
                    }
                    {
                        widget.size === 4 &&
                            <div className = "container-fluid wbdv-widget-field">
                                <h4>{widget.text}</h4>
                            </div>
                    }
                    {
                        widget.size === 5 &&
                            <div className = "container-fluid wbdv-widget-field">
                                <h5>{widget.text}</h5>
                            </div>
                    }
                    {
                        widget.size === 6 &&
                            <div className = "container-fluid wbdv-widget-field">
                                <h6>{widget.text}</h6>
                            </div>
                    }
                </div>
        }
    </div>

export default HeadingWidget