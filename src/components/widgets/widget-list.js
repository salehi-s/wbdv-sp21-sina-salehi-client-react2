import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import HeadingWidget from './heading-widget'
import ParagraphWidget from './paragraph-widget'

const WidgetList = () => {
    const {topicId} = useParams()
    const [widgets, setWidgets] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])
    return (
        <div>
            <i className = "fas fa-plus fa-2x float-right"></i>
            <h1>Widget List</h1>
            <ul className = "list-group">
                {
                    widgets.map(widget =>
                        <li className = "list-group-item"
                            key = {widget.id}>
                            {
                                widget.type === "HEADING" &&
                                    <HeadingWidget widget = {widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                    <ParagraphWidget widget = {widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default WidgetList