import React from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'

const LessonTabs = ({
    lessons = [],
    createLesson,
    findLessonsForModule,
    findLesson,
    updateLesson,
    deleteLesson
}) =>
    <div className = "container-fluid">
        <h2>Lesson Tabs</h2>
        <ul className = "nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className = "nav-item">
                        <EditableItem item = {lesson}/>
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
const dtpm = (dispatch) => ({
    createLesson: () => {
        dispatch({type: "CREATE_LESSON"})
    },
    findLessonsForModule: () => {
        dispatch({type: "FIND_LESSONS_FOR_MODULE"})
    },
    findLesson: () => {
        dispatch({type: "FIND_LESSON"})
    },
    updateLesson: (newItem) => {
        dispatch({type: "UPDATE_LESSON"})
    },
    deleteLesson: () => {
        dispatch({type: "DELETE_LESSON"})
    }
})

export default connect(stpm, dtpm)
(LessonTabs)