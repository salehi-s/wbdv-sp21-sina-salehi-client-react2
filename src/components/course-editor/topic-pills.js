import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'
import {useParams} from 'react-router-dom'
import {createTopic, findTopicsForLesson} from '../../services/topic-service'

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
        lessonId
    } = useParams()

    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [])

    return (<div className="container-fluid">
        <h2>Topic Pills</h2>
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item">
                        <EditableItem item={topic}
                                      updateItem={updateTopic}
                                      deleteItem={deleteTopic}/>
                    </li>
                )
            }
        </ul>
    </div>)
}

{/* State to Property Mapper */}
const stpm = (state) => ({
    topics: state.topicReducer.topics
})

{/* Dispatch to Property Mapper */}
const dtpm = (dispatch) => ({
    createTopic: (lessonId) => {
        createTopic(lessonId, {
            title: "New Topic"
        })
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic: topic
            }))
    },
    findTopicsForLesson: (lessonId) => {
        findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS_FOR_LESSON",
                topics: topics
            }))
    },
    findTopic: () => {
        dispatch({type: "FIND_TOPIC"})
    },
    updateTopic: (newItem) => {
        dispatch({type: "UPDATE_TOPIC",
                  updatedTopic: newItem})
    },
    deleteTopic: (itemToDelete) => {
        dispatch({type: "DELETE_TOPIC",
                  topicToDelete: itemToDelete})
    }
})

export default connect(stpm, dtpm)
(TopicPills)