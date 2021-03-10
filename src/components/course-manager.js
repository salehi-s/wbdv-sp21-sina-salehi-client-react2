import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Route} from 'react-router-dom'
import courseService, {findAllCourses} from "../services/course-service"

{/* The CourseManager component represents the parent class of the two course views: Course Table
    and Course Grid.  The Course Table is rendered beneath the Course Manager header by default,
    and one may alternate between the two views by clicking on the icon in the upper-right corner
    of the page.  The Course Manager also allows the user to create and add new courses to the
    server by inputting a course title in the input field at the top of the page and then
    clicking the red plus icon located to the right of it. */}

class CourseManager extends React.Component {
    state = {
        courses: [],
        newCourseTitle: ""
    }

    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(c => {
                    if (c._id === course._id) {
                        return course
                    }
                    else {
                        return c
                    }
                })
            })))
    }

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        var currentDate = new Date()

        if ((currentDate.getMonth() + 1) < 10) {
            var mdy = "0" + (currentDate.getMonth() + 1)
        }
        else {
            var mdy = (currentDate.getMonth() + 1)
        }
        if (currentDate.getDate() < 10) {
            mdy += "/0" + currentDate.getDate() +
                   "/" + currentDate.getFullYear()
        }
        else {
            mdy += "/" + currentDate.getDate() +
                   "/" + currentDate.getFullYear()
        }

        if (currentDate.getHours() < 10) {
            var time = "0" + currentDate.getHours()
        }
        else {
            var time = currentDate.getHours()
        }
        if (currentDate.getMinutes() < 10) {
            time += ":0" + currentDate.getMinutes()
        }
        else {
            time += ":" + currentDate.getMinutes()
        }

        const newCourse = {
            title: this.state.newCourseTitle,
            owner: "Me",
            lastModified: mdy,
            time: time
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        ...prevState.courses,
                        course
                    ]
                })
            ))

        this.setState(
            (prevState) => ({
                ...prevState,
                newCourseTitle: ""
            })
        )
    }

    deleteCourse = (courseToDelete) => {

        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter(course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return(
            <div>
                <div className = "container-fluid">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className = "collapse navbar-collapse" id = "navbarNav">
                            <ul className = "navbar-nav">
                                <li className = "nav-item">
                                    <h1 className = "wbdv-header-course-manager">
                                        Course Manager
                                    </h1>
                                </li>
                                <span>
                                    <li className = "nav-item">
                                        <input id = "add-course-field"
                                               value = {this.state.newCourseTitle}
                                               onChange = {(e) => this.setState({
                                                   newCourseTitle: e.target.value
                                               })}
                                               className = "form-control wbdv-field-add-course"
                                               title = "Enter the name of a new course here"
                                               placeholder = "New Course Name"></input>
                                    </li>
                                </span>
                                <li className = "nav-item">
                                    <i onClick = {this.addCourse}
                                       className = "fas fa-3x fa-plus-circle wbdv-button-add-course-top float-right"></i>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className = "container-fluid">
                    <Route path = {["/courses/table", "/courses", ""]}
                           exact = {true}>
                        <CourseTable deleteCourse = {this.deleteCourse}
                                     updateCourse = {this.updateCourse}
                                     courses = {this.state.courses}/>
                    </Route>
                </div>
                <div className = "container-fluid">
                    <Route path = "/courses/grid"
                           exact = {true}>
                        <CourseGrid deleteCourse = {this.deleteCourse}
                                    updateCourse = {this.updateCourse}
                                    courses = {this.state.courses}/>
                    </Route>
                </div>
                <div className = "container-fluid">
                    <Route path = "/courses/:layout/edit/:courseId"
                           render = {(props) => <CourseEditor props = {props}/>}>
                    </Route>
                </div>
                <div className = "container-fluid">
                    <div className = "fixed-bottom">
                        <i onClick = {this.addCourse}
                           className = "fas fa-3x fa-plus-circle float-right wbdv-button-add-course-bottom"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseManager