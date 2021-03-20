import React, {useState, useEffect} from 'react'

const WidgetList = () => {
    const [widgets, setWidgets] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/api/topics/topic1/widgets")
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    })
    return (
        <div>
            <h1>Widget List</h1>
            <ul>
                {
                    widgets.map(widget =>
                        <li key = {widget.id}>
                            {widget.type}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default WidgetList