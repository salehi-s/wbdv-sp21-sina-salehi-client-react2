import React from 'react'

const TOPIC_URL = process.env.REACT_APP_TOPIC_URL
const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const createWidget = (tid, widget) => {
    return(
        fetch(`${TOPIC_URL}/topics/${tid}/widgets`, {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
    )
}

export const findWidgetsForTopic = (tid) => {
    return(
        fetch(`${TOPIC_URL}/topics/${tid}/widgets`)
            .then(response => response.json())
    )
}

export const findWidget = (wid) => {
    return(
        0
    )
}

export const updateWidget = (wid, widget) => {
    return(
        fetch(`${WIDGET_URL}/widgets/${wid}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(response => response.json())
    )
}

export const deleteWidget = (wid) => {
    return(
        fetch(`${WIDGET_URL}/widgets/${wid}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    )
}

const api = {
    createWidget,
    findWidgetsForTopic,
    findWidget,
    updateWidget,
    deleteWidget
}

export default api