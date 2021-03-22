import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setWidget, editing}) => {
    return (
        <div className = "container-fluid">
            <h2>Paragraph Widget {widget.id}</h2>

            {
                editing &&
                    <textarea className = "form-control"
                              value = {widget.text}
                              onChange = {(e) => setWidget({...widget,
                                                                                        text: e.target.value})}></textarea>
            }
            {
                !editing &&
                    <p>
                        {widget.text}
                    </p>
            }
        </div>
    )
}

export default ParagraphWidget