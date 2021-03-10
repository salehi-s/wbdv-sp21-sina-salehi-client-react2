const initialState = {
    modules: [
        {title: "CS5610", _id: "1"},
        {title: "DS5110", _id: "2"},
        {title: "CS5200", _id: "3"}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newModule = {
                title: "New Module",
                _id: (new Date()).getTime()
            }
            return {
                ...state,
                modules: [
                    ...state.modules,
                    newModule
                ]
            }
        case "FIND_MODULES_FOR_COURSE":

        case "FIND_MODULE":

        case "UPDATE_MODULE":
            return {
                ...state,
                modules: state.modules.map(module => {
                    if (module._id === action.updatedModule._id) {
                        return action.updatedModule
                    }
                    else {
                        return module
                    }
                })
            }
        case "DELETE_MODULE":
            return {
                ...state,
                modules: state.modules.filter(module => {
                    if (module._id !== action.moduleToDelete._id) {
                        return true
                    }
                    else {
                        return false
                    }
                })
            }
        default:
            return state
    }
}

export default moduleReducer