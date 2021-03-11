import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'
import {Route, useParams} from 'react-router-dom'
import topicService from '../../services/topic-service'

const TopicPills = ({
    topics = [],
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteTopic
}) => {
    const {
        layout,
        courseId,
        moduleId,
        lessonId,
        topicId
    } = useParams()

    useEffect(() => {
        if (moduleId !== "undefined" &&
            typeof moduleId !== "undefined" &&
            lessonId !== "undefined" &&
            typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])

    return (
        <Route path = {["/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
               exact = {true}>
            <div className = "container-fluid">
                <h2>Topics</h2>
                <ul className = "nav nav-pills">
                    {
                        topics.map(topic =>
                            <li className = {`nav-link ${topic._id === topicId ? "active" : ""} wbdv-pill-topic`}>
                                <EditableItem to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                              item = {topic}
                                              active = {topic._id === topicId}
                                              updateItem = {updateTopic}
                                              deleteItem = {deleteTopic}/>
                            </li>
                        )
                    }
                    <li className = "list-group-item">
                        <i className = "fas fa-plus fa-2x"
                           onClick = {() => createTopic(lessonId)}></i>
                    </li>
                </ul>
            </div>
        </Route>
    )
}

{/* State to Property Mapper */}
const stpm = (state) => ({
    topics: state.topicReducer.topics
})

{/* Dispatch to Property Mapper */}
const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {
            title: "New Topic"
        })
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic: topic
            }))
    },
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics
            }))
    },
    findTopic: () => {
        dispatch({type: "FIND_TOPIC"})
    },
    updateTopic: (newItem) => {
        topicService.updateTopic(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_TOPIC",
                                      updatedTopic: newItem}))
    },
    deleteTopic: (itemToDelete) => {
        topicService.deleteTopic(itemToDelete._id)
            .then(status => dispatch({type: "DELETE_TOPIC",
                                      topicToDelete: itemToDelete}))
    }
})

export default connect(stpm, dtpm)
(TopicPills)