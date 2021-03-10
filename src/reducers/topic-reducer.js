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
            const newTopic = {
                title: "New Topic",
                _id: (new Date()).getTime()
            }
            return {
                ...state,
                topics: [
                    ...state.topics,
                    newTopic
                ]
            }
        case "FIND_TOPICS_FOR_LESSON":

        case "FIND_TOPIC":

        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic._id === action.updatedTopic._id) {
                        return action.updatedTopic
                    }
                    else {
                        return topic
                    }
                })
            }
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => {
                    if (topic._id !== action.topicToDelete._id) {
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

export default topicReducer