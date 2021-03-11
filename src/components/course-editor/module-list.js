import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from '../editable-item'
import {useParams} from 'react-router-dom'
import moduleService from '../../services/module-service'

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
        lessonId,
        topicId
    } = useParams()

    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])

    return (<div className = "container-fluid">
        <h2>Modules</h2>

        <ul className = "list-group">
            {
                modules.map(module =>
                    <li className = {`list-group-item ${module._id === moduleId ? "active" : ""}`}>
                        <EditableItem to = {`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                      item = {module}
                                      active = {module._id === moduleId}
                                      updateItem = {updateModule}
                                      deleteItem = {deleteModule}/>
                    </li>
                )
            }
            <li className = "list-group-item wbdv-list-item-create-module">
                <i className = "fas fa-plus fa-2x"
                   onClick = {() => createModule(courseId)}></i>
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
    createModule: (courseId) => {
        moduleService.createModule(courseId, {
            title: "New Module"
        })
            .then(module => dispatch({
                type: "CREATE_MODULE",
                module: module
            }))
    },
    findModulesForCourse: (courseId) => {
        moduleService.findModulesForCourse(courseId)
            .then(modules => dispatch({
                type: "FIND_MODULES_FOR_COURSE",
                modules: modules
            }))
    },
    findModule: () => {
        dispatch({type: "FIND_MODULE"})
    },
    updateModule: (newItem) => {
        moduleService.updateModule(newItem._id, newItem)
            .then(status => dispatch({type: "UPDATE_MODULE",
                                      updatedModule: newItem}))
    },
    deleteModule: (itemToDelete) => {
        moduleService.deleteModule(itemToDelete._id)
            .then(status => dispatch({type: "DELETE_MODULE",
                                      moduleToDelete: itemToDelete}))
    }
})

export default connect(stpm, dtpm)
(ModuleList)