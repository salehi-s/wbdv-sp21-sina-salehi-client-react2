import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'

import moduleReducer from '../../reducers/module-reducer'
import lessonReducer from '../../reducers/lesson-reducer'
import topicReducer from '../../reducers/topic-reducer'
import widgetReducer from '../../reducers/widget-reducer'

import ModuleList from './module-list'
import LessonTabs from './lesson-tabs'
import TopicPills from './topic-pills'
import WidgetList from "../widgets/widget-list"

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({props}) => {
    const {
        layout,
        courseId,
        moduleId,
        lessonId,
        topicId,
        widgetId
    } = useParams()
    return(
    <Provider store = {store}>
        <div>
            <div className = "container-fluid">
                <div>
                    <h1>
                        <Link to = {`/courses/${layout}`}>
                            <i className = "fas fa-times"></i>
                        </Link>
                        Course Editor
                    </h1>
                </div>
            </div>

            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-3">
                        <ModuleList/>
                    </div>
                    <div className = "col-9">
                        <LessonTabs/>
                        <br/>
                        <TopicPills/>
                        <br/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        </div>
    </Provider>
    )
}

export default CourseEditor