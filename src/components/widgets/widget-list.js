import React, {useState, useEffect} from 'react'
import {Route, useParams} from 'react-router-dom'
import {connect} from 'react-redux'

import HeadingWidget from './heading-widget'
import ParagraphWidget from './paragraph-widget'
import ListWidget from './list-widget'
import ImageWidget from './image-widget'

import widgetService from '../../services/widget-service'

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

    const [widget, setWidget] = useState({})
    const [widgets, setWidgets] = useState([])

    // Local Implementation: http://localhost:8080/api/topics/${topicId}/widgets
    // Remote Implementation: http://salty-springs-12156.herokuapp.com/api/topics/${topicId}/widgets
    useEffect(() => {
        fetch(`http://salty-springs-12156.herokuapp.com/api/topics/${topicId}/widgets`)
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

    // Local Implementation: http://localhost:8080/api/topics/${topicId}/widgets
    // Remote Implementation: http://salty-springs-12156.herokuapp.com/api/topics/${topicId}/widgets
    const createWidget = () => {
        fetch(`http://salty-springs-12156.herokuapp.com/api/topics/${topicId}/widgets`, {
            method: "POST",
            body: JSON.stringify({
                name: "New Widget",
                topicId: topicId,
                type: "HEADING",
                widgetOrder: null,
                text: "Widget Text",
                src: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg",
                url: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg",
                href: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg",
                size: 1,
                width: 100,
                height: 100,
                cssClass: null,
                style: null,
                value: "initialValue",
                ordered: false
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
            .then(widget => setWidgets((widgets) => [...widgets, widget]))
    }

    // Local Implementation: http://localhost:8080/api/widgets/${id}
    // Remote Implementation: http://salty-springs-12156.herokuapp.com/api/widgets/${id}
    const deleteWidget = (id) =>
        fetch(`http://salty-springs-12156.herokuapp.com/api/widgets/${id}`, {
            method: "DELETE"
        })
            .then((status) => {
                setWidgets((widgets) => widgets.filter(w => w.id !== id))
            })

    // Local Implementation: http://localhost:8080/api/widgets/${id}
    // Remote Implementation: http://salty-springs-12156.herokuapp.com/api/widgets/${id}
    const updateWidget = (id, widget) =>
        fetch(`http://salty-springs-12156.herokuapp.com/api/widgets/${id}`, {
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
                   title = "Create a New Widget (Default: Heading)"
                   onClick = {createWidget}/>
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
                                               onClick = {() => deleteWidget(_widget.id)}/>
                                            <i className = "fas fa-check fa-2x float-right wbdv-editable-item-action-icon"
                                               onClick = {() => {updateWidget(_widget.id, widget)}}/>
                                        </>
                                }
                                {
                                    _widget.id !== widget.id &&
                                        <i className = "fas fa-cog fa-2x float-right wbdv-editable-item-action-icon"
                                           onClick = {() => setWidget(_widget)}/>
                                }
                                {
                                    _widget.type === "HEADING" &&
                                        <HeadingWidget widget = {_widget}
                                                       widgetObject = {widget}
                                                       setWidget = {setWidget}
                                                       editing = {_widget.id === widget.id}/>
                                }
                                {
                                    _widget.type === "PARAGRAPH" &&
                                        <ParagraphWidget widget = {_widget}
                                                         widgetObject = {widget}
                                                         setWidget = {setWidget}
                                                         editing = {_widget.id === widget.id}/>
                                }
                                {
                                    _widget.type === "LIST" &&
                                        <ListWidget widget = {_widget}
                                                    widgetObject = {widget}
                                                    setWidget = {setWidget}
                                                    editing = {_widget.id === widget.id}
                                                    ordered = {widget.ordered}/>
                                }
                                {
                                    _widget.type === "IMAGE" &&
                                        <ImageWidget widget = {_widget}
                                                     widgetObject = {widget}
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
            name: "New Widget",
            topicId: tid,
            type: "HEADING",
            widgetOrder: null,
            text: "Widget Text",
            src: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg",
            url: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg",
            href: "https://upload.wikimedia.org/wikipedia/en/b/bd/Northeastern_University_seal.svg",
            size: 1,
            width: 100,
            height: 100,
            cssClass: null,
            style: null,
            value: "initialValue",
            ordered: false
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