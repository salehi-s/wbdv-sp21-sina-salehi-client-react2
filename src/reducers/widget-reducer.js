import React from 'react'

const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "FIND_WIDGET":

        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget._id === action.updatedWidget._id) {
                        return action.updatedWidget
                    }
                    else {
                        return widget
                    }
                })
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(widget => {
                    if (widget._id !== action.widgetToDelete._id) {
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

export default widgetReducer