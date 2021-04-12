import React, {useState} from 'react'
import {Link} from 'react-router-dom'

{/* The CourseRow component represents a single row to be displayed in the Course Table
    which details the title, owner, date last modified, and time last modified of a single
    course. */}

const CourseRow = (
    {
        title,
        owner,
        lastModified,
        time,
        deleteCourse,
        updateCourse,
        course
    }
) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (<tr>
                <td>
                    {
                        !editing &&
                        <Link to = {`/courses/table/edit/${course._id}`}>
                            {title}
                        </Link>
                    }
                    {
                        editing &&
                        <input onChange = {(event) => setNewTitle(event.target.value)}
                               value = {newTitle}
                               className = "form-control"/>
                    }
                </td>
                <td className = "d-none d-md-table-cell">{owner}</td>
                <td className = "d-none d-lg-table-cell">{lastModified}</td>
                <td className = "d-none d-lg-table-cell">{time}</td>
                <td>
                    <Link to = {`/courses/${course._id}/quizzes`}>
                        Quizzes
                    </Link>
                </td>
                <td>
                    <span className = "wbdv-buttons-course-row">
                        <i onClick = {() => deleteCourse(course)}
                           className = "fas fa-lg fa-trash"></i>
                    </span>
                    <span className = "wbdv-buttons-course-row">
                        {!editing && <i onClick = {() => setEditing(true)}
                            className = "fas fa-lg fa-edit"></i>}
                        {editing && <i onClick={() => saveTitle()}
                            className="fas fa-lg fa-check"></i>}
                    </span>
                </td>
            </tr>)
}

export default CourseRow