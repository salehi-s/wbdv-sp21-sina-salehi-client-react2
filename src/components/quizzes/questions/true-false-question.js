import React, {useState} from 'react'

const TrueFalseQuestion = ({question}) => {

    const [answer, setAnswer] = useState(null)
    const [grade, setGrade] = useState(false)

    return(
        <div className = "container-fluid">
            <div className = "container-fluid">
                <h4>
                    {question.question}
                    {
                        grade &&
                        JSON.stringify(answer) === question.correct &&
                            <i className = "fas fa-check fa-2x float-right wbdv-editable-item-action-icon"/>
                    }
                    {
                        grade &&
                        JSON.stringify(answer) !== question.correct &&
                            <i className = "fas fa-times fa-2x float-right wbdv-editable-item-action-icon"/>
                    }
                </h4>
            </div>
            <div className = "container-fluid">
                {question.correct}
            </div>
            <div className = "container-fluid">
                {JSON.stringify(answer)}
            </div>
            {
                !grade &&
                    <div className = "container-fluid">
                        <ul className = "list-group">
                            <li className = "list-group-item">
                                <label>
                                    <input type = "radio"
                                           name = {question._id}
                                           onClick = {() => setAnswer(true)}/> True
                                </label>
                            </li>
                            <li className = "list-group-item">
                                <label>
                                    <input type = "radio"
                                           name = {question._id}
                                           onClick = {() => setAnswer(false)}/> False
                                </label>
                            </li>
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
                        <ul className = "list-group">
                            <li className = {`list-group-item ${JSON.stringify(answer) === question.correct ? "list-group-item-success" : "list-group-item-danger"}`}>
                                <label>
                                    <input type = "radio"
                                           name = {question._id}
                                           onClick = {() => setAnswer(true)}/> True
                                    <i className = {`fas ${JSON.stringify(answer) === question.correct ? "fa-check" : "fa-times"} fa-2x float-right wbdv-editable-item-action-icon`}/>
                                </label>
                            </li>
                            <li className = {`list-group-item ${JSON.stringify(answer) === question.correct ? "list-group-item-success" : "list-group-item-danger"}`}>
                                <label>
                                    <input type = "radio"
                                           name = {question._id}
                                           onClick = {() => setAnswer(false)}/> False
                                    <i className = {`fas ${JSON.stringify(answer) === question.correct ? "fa-check" : "fa-times"} fa-2x float-right wbdv-editable-item-action-icon`}/>
                                </label>
                            </li>
                        </ul>
                        <br/>
                        <div className = "container-fluid">
                            <button type = "button"
                                    className = "btn btn-success"
                                    onClick = {() => setGrade(false)}>Try Again</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default TrueFalseQuestion