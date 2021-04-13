import React, {useState} from 'react'

const MultipleChoiceQuestion = ({question}) => {

    const [answer, setAnswer] = useState(null)
    const [grade, setGrade] = useState(false)

    return(
        <div className = "container-fluid">
            <div className = "container-fluid">
                <h4>
                    {question.question}
                    {
                        grade &&
                        answer === question.correct &&
                            <i className = "fas fa-check fa-lg float-right wbdv-editable-item-action-icon wbdv-answer-correct"/>
                    }
                    {
                        grade &&
                        answer !== question.correct &&
                            <i className = "fas fa-times fa-lg float-right wbdv-editable-item-action-icon wbdv-answer-incorrect"/>
                    }
                </h4>
            </div>
            <br/>
            {
                !grade &&
                    <div className = "container-fluid">
                        <ul className = "container-fluid">
                            {
                                question.choices.map((choice) => {
                                    return(
                                        <li className = "list-group-item">
                                            <label>
                                                <input type = "radio"
                                                       name = {question._id}
                                                       onClick = {() => setAnswer(choice)}/>
                                                {"  " + choice}
                                            </label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <br/>
                        <div className = "container-fluid">
                            <button type = "button"
                                    className = "btn btn-success"
                                    onClick = {() => setGrade(true)}>Grade</button>
                        </div>
                    </div>
            }
            {
                grade &&
                    <div className = "container-fluid">
                        <ul className = "container-fluid">
                            {
                                answer === question.correct &&
                                    question.choices.map((choice) => {
                                        return(
                                            <li className = {`list-group-item ${question.correct === choice ? "list-group-item-success" : ""}`}>
                                                <label>
                                                    <input type = "radio"
                                                           name = {question._id}/>
                                                    {"  " + choice}
                                                    {
                                                        choice === question.correct &&
                                                            <i className = "fas fa-check fa-lg float-right wbdv-editable-item-action-icon"/>
                                                    }
                                                </label>
                                            </li>
                                        )
                                    })
                            }
                            {
                                !(answer === question.correct) &&
                                    question.choices.map((choice) => {
                                        return(
                                            <li className = {`list-group-item ${question.correct === choice ? "list-group-item-success" : "list-group-item-danger"}`}>
                                                <label>
                                                    <input type = "radio"
                                                           name = {question._id}/>
                                                    {"  " + choice}
                                                    {
                                                        choice === question.correct &&
                                                        <i className = "fas fa-check fa-lg float-right wbdv-editable-item-action-icon"/>
                                                    }
                                                    {
                                                        !(choice === question.correct) &&
                                                        <i className = "fas fa-times fa-lg float-right wbdv-editable-item-action-icon"/>
                                                    }
                                                </label>
                                            </li>
                                        )
                                    })
                            }
                        </ul>
                        <br/>
                        <div className = "container-fluid">
                            <button type = "button"
                                    className = "btn btn-success"
                                    onClick = {() => setGrade(false)}>Try Again</button>
                        </div>
                    </div>
            }
            <br/>
            <h6>Your Answer: {answer}</h6>
        </div>
    )
}

export default MultipleChoiceQuestion