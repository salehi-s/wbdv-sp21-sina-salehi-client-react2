import React from 'react'
import {connect} from 'react-redux'

const LessonTabs = ({lessons = []}) =>
    <div className = "container-fluid">
        <h2>Lesson Tabs</h2>
        <ul className = "nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className = "nav-item">
                        <a className = "nav-link"
                           href = "#">
                            {lesson.title}
                        </a>
                    </li>
                )
            }
        </ul>
    </div>

{/* State to Property Mapper */}
const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})

{/* Dispatch to Property Mapper */}
const dtpm = (dispatch) => {

}

export default connect(stpm, dtpm)
(LessonTabs)