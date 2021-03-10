import React from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'

const TopicPills = ({
    topics = [],
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteTopic
}) =>
    <div className = "container-fluid">
        <h2>Topic Pills</h2>
        <ul className = "nav nav-pills">
            {
                topics.map(topic =>
                    <li className = "nav-item">
                        <EditableItem item = {topic}/>
                    </li>
                )
            }
        </ul>
    </div>

{/* State to Property Mapper */}
const stpm = (state) => ({
    topics: state.topicReducer.topics
})

{/* Dispatch to Property Mapper */}
const dtpm = (dispatch) => ({
    createTopic: () => {
        dispatch({type: "CREATE_TOPIC"})
    },
    findTopicsForLesson: () => {
        dispatch({type: "FIND_TOPICS_FOR_LESSON"})
    },
    findTopic: () => {
        dispatch({type: "FIND_TOPIC"})
    },
    updateTopic: (newItem) => {
        dispatch({type: "UPDATE_TOPIC"})
    },
    deleteTopic: () => {
        dispatch({type: "DELETE_TOPIC"})
    }
})

export default connect(stpm, dtpm)
(TopicPills)