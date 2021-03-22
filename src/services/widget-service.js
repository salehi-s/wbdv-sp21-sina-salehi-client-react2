import React from 'react'

// const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/salehi.s/topics"
const TOPICS_URL = process.env.REACT_APP_TOPICS_URL
const WIDGETS_URL = process.env.REACT_APP_WIDGETS_URL

export const createWidget = (tid, widget) => {
    return(
        fetch(`${TOPICS_URL}/topics/${tid}/widgets`, {
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
        fetch(`${TOPICS_URL}/topics/${tid}/widgets`)
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
        fetch(`${WIDGETS_URL}/widgets/${wid}`, {
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
        fetch(`${WIDGETS_URL}/widgets/${wid}`, {
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