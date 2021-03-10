import React from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'
import {useParams} from 'react-router-dom'

const LessonTabs = ({
    lessons = [],
    createLesson,
    findLessonsForModule,
    findLesson,
    updateLesson,
    deleteLesson
}) => {
    const {
        layout,
        courseId,
        moduleId,
        lessonId
    } = useParams()

    return (<div className="container-fluid">
        <h2>Lesson Tabs</h2>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <EditableItem to = {`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                      item={lesson}
                                      updateItem={updateLesson}
                                      deleteItem={deleteLesson}/>
                    </li>
                )
            }
        </ul>
    </div>)
}

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
        dispatch({type: "UPDATE_LESSON",
                  updatedLesson: newItem})
    },
    deleteLesson: (itemToDelete) => {
        dispatch({type: "DELETE_LESSON",
                  lessonToDelete: itemToDelete})
    }
})

export default connect(stpm, dtpm)
(LessonTabs)