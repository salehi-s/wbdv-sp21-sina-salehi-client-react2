import React from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import moduleReducer from '../../reducers/module-reducer'
import lessonReducer from '../../reducers/lesson-reducer'
import topicReducer from '../../reducers/topic-reducer'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import ModuleList from './module-list'
import LessonTabs from './lesson-tabs'
import TopicPills from './topic-pills'

{/* The CourseEditor component contains multiple static elements from the Course Editor page
    from Assignment 1 and Assignment 2.  This page is fully non-functional, except for the
    arrow located in the upper-left corner of the page and the X located in the upper-right
    corner of the page.  Both of these functional elements return the user to the previous page. */}

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({props}) => {
    const {
        layout,
        courseId,
        moduleId,
        lessonId,
        topicId
    } = useParams()
    return (<Provider store={store}>
        <div>
            <div className="container-fluid">
                <div>
                    <h1>
                        <Link to="">
                            <i onClick={() => props.history.goBack()}
                               className="fas fa-arrow-left"></i>
                        </Link>
                        Course Editor
                        <i onClick={() => props.history.goBack()}
                           className="fas fa-times float-right"></i>
                    </h1>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <ModuleList/>
                    </div>
                    <div className="col-9">
                        <LessonTabs/>
                        <TopicPills/>
                    </div>
                </div>
            </div>
        </div>
    </Provider>)
}

export default CourseEditor