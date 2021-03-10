import React from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'

const ModuleList = ({
    modules = [],
    createModule,
    findModulesForCourse,
    findModule,
    updateModule,
    deleteModule
}) =>
    <div className = "container-fluid">
        <h2>Module List</h2>
        <ul className = "list-group">
            {
                modules.map(module =>
                    <li className = "list-group-item">
                        <EditableItem item = {module}
                                      updateItem = {updateModule}/>
                    </li>
                )
            }
            <li className = "list-group-item">
                <i className = "fas fa-plus fa-2x"
                   onClick = {createModule}></i>
            </li>
        </ul>
    </div>

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
        dispatch({type: "UPDATE_MODULE"})
    },
    deleteModule: () => {
        dispatch({type: "DELETE_MODULE"})
    }
})

export default connect(stpm, dtpm)
(ModuleList)