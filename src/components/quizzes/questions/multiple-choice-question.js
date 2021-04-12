import React from 'react'

const MultipleChoiceQuestion = ({question}) => {
    return(
        <div className = "container-fluid">
            <div className = "container-fluid">
                <h4>{question.question}</h4>
            </div>
            <div className = "container-fluid">
                {question.correct}
            </div>
            <div className = "container-fluid">
                {
                    question.choices.map((choice) => {
                        return(
                            <div className = "container-fluid">
                                <label>
                                    <input type = "radio"
                                           name = {question._id}/>
                                    {choice}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion