import React from 'react'
import {connect} from 'react-redux'

const ModuleList = ({
    modules = [],
    createModule
}) =>
    <div className = "container-fluid">
        <h2>Module List</h2>
        <ul className = "list-group">
            {
                modules.map(module =>
                    <li className = "list-group-item">
                        {module.title}
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
    }
})

export default connect(stpm, dtpm)
(ModuleList)