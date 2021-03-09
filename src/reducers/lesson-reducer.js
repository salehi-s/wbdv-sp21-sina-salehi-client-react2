const initialState = {
    lessons: [
        {title: "Lesson1", _id: "1"},
        {title: "Lesson2", _id: "2"},
        {title: "Lesson3", _id: "3"}
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":

        case "FIND_LESSONS_FOR_MODULE":

        case "FIND_LESSON":

        case "UPDATE_LESSON":

        case "DELETE_LESSON":

        default:
            return state
    }
}

export default lessonReducer