import React from 'react'
import {connect} from 'react-redux'

const ModuleList = ({modules = []}) =>
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
        </ul>
    </div>

{/* State to Property Mapper */}
const stpm = (state) => ({
    modules: state.modules
})

{/* Dispatch to Property Mapper */}
const dtpm = (dispatch) => {

}

export default connect(stpm, dtpm)
(ModuleList)