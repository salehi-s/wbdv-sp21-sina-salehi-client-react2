import React from 'react'
import {connect} from 'react-redux'

const TopicPills = ({
    topics = [],
    createTopic
}) =>
    <div className = "container-fluid">
        <h2>Topic Pills</h2>
        <ul className = "nav nav-pills">
            {
                topics.map(topic =>
                    <li className = "nav-item">
                        <a className = "nav-link"
                           href = "#">
                            {topic.title}
                        </a>
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
    }
})

export default connect(stpm, dtpm)
(TopicPills)