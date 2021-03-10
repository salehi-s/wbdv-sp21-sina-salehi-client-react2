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
            const newLesson = {
                title: "New Lesson",
                _id: (new Date()).getTime()
            }
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    newLesson
                ]
            }
        case "FIND_LESSONS_FOR_MODULE":

        case "FIND_LESSON":

        case "UPDATE_LESSON":
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.updatedLesson._id) {
                        return action.updatedLesson
                    }
                    else {
                        return lesson
                    }
                })
            }
        case "DELETE_LESSON":
            return {
                ...state,
                lessons: state.lessons.filter(lesson => {
                    if (lesson._id !== action.lessonToDelete._id) {
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

export default lessonReducer