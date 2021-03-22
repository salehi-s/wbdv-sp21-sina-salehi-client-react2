import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Route, useParams} from 'react-router-dom'

import widgetService from '../../services/widget-service'
import HeadingWidget from './heading-widget'
import ParagraphWidget from './paragraph-widget'

const WidgetList = ({
    allWidgets = [],
    // createWidget,
    findWidgetsForTopic,
    findWidget,
    // updateWidget,
    // deleteWidget
}) => {
    const {
        layout,
        courseId,
        moduleId,
        lessonId,
        topicId,
        widgetId
    } = useParams()

    const [widgets, setWidgets] = useState([])
    const [widget, setWidget] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))

        /*
        if (moduleId !== "undefined" &&
            typeof moduleId !== "undefined" &&
            lessonId !== "undefined" &&
            typeof lessonId !== "undefined" &&
            topicId !== "undefined" &&
            typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
        */

    }, [topicId])

    const createWidget = () => {
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: "POST",
            body: JSON.stringify({
                type: "HEADING",
                size: "1",
                text: "New Widget"
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(widget => setWidgets((widgets) => [...widgets, widget]))
    }

    const deleteWidget = (id) =>
        fetch(`http://localhost:8080/api/widgets/${id}`, {
            method: "DELETE"
        })
            .then((status) => {
                setWidgets((widgets) => widgets.filter(w => w.id !== id))
            })

    const updateWidget = (id, widget) =>
        fetch(`http://localhost:8080/api/widgets/${id}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        })
            .then((status) => {
                setWidget({})
                setWidgets((widgets) => widgets.map(w => w.id === id ? widget : w))
            })

    return(
        <Route path = {["/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets/:widgetId"]}
               exact = {true}>
            <div className = "container-fluid">
                <i className = "fas fa-plus fa-2x float-right"
                   onClick = {createWidget}></i>
                <h2>Widget List</h2>
                <ul className = "list-group">
                    {
                        widgets.map(_widget =>
                            <li className = "list-group-item"
                                key = {_widget.id}>
                                {
                                    _widget.id === widget.id &&
                                        <>
                                            <i className = "fas fa-trash fa-2x float-right wbdv-editable-item-action-icon"
                                               onClick = {() => deleteWidget(_widget.id)}></i>
                                            <i className = "fas fa-check fa-2x float-right wbdv-editable-item-action-icon"
                                               onClick = {() => {updateWidget(_widget.id, widget)}}></i>
                                        </>
                                }
                                {
                                    _widget.id !== widget.id &&
                                        <i className = "fas fa-cog fa-2x float-right wbdv-editable-item-action-icon"
                                           onClick = {() => setWidget(_widget)}></i>
                                }
                                {
                                    _widget.type === "HEADING" &&
                                        <HeadingWidget widget = {widget}
                                                       setWidget = {setWidget}
                                                       editing = {_widget.id === widget.id}/>
                                }
                                {
                                    _widget.type === "PARAGRAPH" &&
                                        <ParagraphWidget widget = {widget}
                                                         setWidget = {setWidget}
                                                         editing = {_widget.id === widget.id}/>
                                }
                            </li>
                        )
                    }
                </ul>
            </div>
        </Route>
    )
}

{/* State to Property Mapper */}
const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

{/* Dispatch to Property Mapper */}
const dtpm = (dispatch) => ({
    createWidget: (tid) => {
        widgetService.createWidget(tid, {
            type: "HEADING",
            size: 1,
            text: "New Widget"
        })
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget: widget
            }))
    },
    findWidgetsForTopic: (tid) => {
        widgetService.findWidgetsForTopic(tid)
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets: widgets
            }))
    },
    findWidget: () => {
        dispatch({type: "FIND_WIDGET"})
    },
    updateWidget: (newItem) => {
        widgetService.updateWidget(newItem._id, newItem)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                updatedWidget: newItem
            }))
    },
    deleteWidget: (itemToDelete) => {
        widgetService.deleteWidget(itemToDelete._id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: itemToDelete
            }))
    }
})

export default connect(stpm, dtpm)
(WidgetList)