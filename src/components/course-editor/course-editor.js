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

const CourseEditor = ({props}) =>
    <Provider store = {store}>
        <div>
            <div className="container-fluid">
                <div>
                    <h1>
                        <Link to = "">
                            <i onClick = {() => props.history.goBack()}
                               className = "fas fa-arrow-left"></i>
                        </Link>
                        Course Editor
                        <i onClick = {() => props.history.goBack()}
                           className = "fas fa-times float-right"></i>
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
                        <TopicPills/>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu"
                         className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-3">
                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Modules</span>
                            </h6>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Module 1: SQL
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Module 2: React
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Module 3: Node.js
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Module 4: MongoDB
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">All Courses</h1>
                            <div className="container-fluid">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Topic 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Topic 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Topic 3</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Topic 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-1">
                                    <button type="button" className="btn-outline-success">Add Widget
                                    </button>
                                    <button type="button" className="btn-outline-danger">Remove Widget
                                    </button>
                                </div>
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-success">Save
                                    </button>
                                    <button type="button" className="btn btn-sm btn-danger">Revert
                                    </button>
                                </div>
                            </div>
                        </div>

                        <h2>Lesson Information</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                <tr>
                                    <th>Lesson</th>
                                    <th>Owned By</th>
                                    <th>Date Last Modified</th>
                                    <th>Time Last Modified</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr onClick="document.location='../courseeditor/cs5610.courseeditor.template.client.html'">
                                    <td>HTML and CSS</td>
                                    <td>Me</td>
                                    <td>January 12, 2021</td>
                                    <td>4:30 P.M.</td>
                                </tr>
                                <tr onClick="document.location='../courseeditor/cs5200.courseeditor.template.client.html'">
                                    <td>Relational Database Design</td>
                                    <td>Me</td>
                                    <td>January 14, 2021</td>
                                    <td>3:15 P.M.</td>
                                </tr>
                                <tr onClick="document.location='../courseeditor/cs5600.courseeditor.template.client.html'">
                                    <td>Memory Allocation</td>
                                    <td>Me</td>
                                    <td>December 25, 2020</td>
                                    <td>9:15 P.M.</td>
                                </tr>
                                <tr onClick="document.location='../courseeditor/cs5500.courseeditor.template.client.html'">
                                    <td>The Agile Development Model</td>
                                    <td>Me</td>
                                    <td>November 13, 2020</td>
                                    <td>10:45 A.M.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </Provider>

export default CourseEditor