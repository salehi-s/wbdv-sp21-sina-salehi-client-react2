import React from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'
import {useParams} from 'react-router-dom'

const ModuleList = ({
    modules = [],
    createModule,
    findModulesForCourse,
    findModule,
    updateModule,
    deleteModule
}) => {
    const {
        layout,
        courseId,
        moduleId,
        lessonId
    } = useParams()

    return (<div className = "container-fluid">
        <h2>Module List</h2>

        <ul>
            <li>layout: {layout}</li>
            <li>courseId: {courseId}</li>
            <li>moduleId: {moduleId}</li>
            <li>lessonId: {lessonId}</li>
        </ul>

        <ul className = "list-group">
            {
                modules.map(module =>
                    <li className = "list-group-item">
                        <EditableItem to = {`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                      item = {module}
                                      updateItem = {updateModule}
                                      deleteItem = {deleteModule}/>
                    </li>
                )
            }
            <li className = "list-group-item">
                <i className = "fas fa-plus fa-2x"
                   onClick = {createModule}></i>
            </li>
        </ul>
    </div>)
}

{/* State to Property Mapper */}
const stpm = (state) => ({
    modules: state.moduleReducer.modules
})

{/* Dispatch to Property Mapper */}
const dtpm = (dispatch) => ({
    createModule: () => {
        dispatch({type: "CREATE_MODULE"})
    },
    findModulesForCourse: () => {
        dispatch({type: "FIND_MODULES_FOR_COURSE"})
    },
    findModule: () => {
        dispatch({type: "FIND_MODULE"})
    },
    updateModule: (newItem) => {
        dispatch({type: "UPDATE_MODULE",
                  updatedModule: newItem})
    },
    deleteModule: (itemToDelete) => {
        dispatch({type: "DELETE_MODULE",
                  moduleToDelete: itemToDelete})
    }
})

export default connect(stpm, dtpm)
(ModuleList)