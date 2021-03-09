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

        case "FIND_MODULES_FOR_COURSE":

        case "FIND_MODULE":

        case "UPDATE_MODULE":

        case "DELETE_MODULE":

        default:
            return state
    }
}

export default moduleReducer