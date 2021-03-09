const initialState = {
    topics: [
        {title: "Topic1", _id: "1"},
        {title: "Topic2", _id: "2"},
        {title: "Topic3", _id: "3"}
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":

        case "FIND_TOPICS_FOR_LESSON":

        case "FIND_TOPIC":

        case "UPDATE_TOPIC":

        case "DELETE_TOPIC":

        default:
            return state
    }
}

export default topicReducer