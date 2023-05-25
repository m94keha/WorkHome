import React from 'react' //6.9k (qzipped: 2.7k)
import { Route } from 'react-router-dom'

export const Question = (props) => {
    return (
        <Route exact path={props.path}>
            <div className='test-wrapper'>
                <h2 className='question-title'><span>{props.questionNumber}</span>{props.question}</h2>
                <div className='question-inputs'>
                    <input className='question-input' type="radio" id="q1" name='q1' value='yes' />
                    <label htmlFor='q1'>{props.var1}</label>
                </div>
                <div className='question-inputs'>
                    <input className='question-inputs' type='radio' id='q2' name='q1' value="no" />
                    <label htmlFor='q1'>{props.var2}</label>
                </div>
                <div className='question-inputs'>
                    <input className='question-inputs' type='radio' id='q3' name='q1' value="no" />
                    <label htmlFor='q1'>{props.var3}</label>
                </div>
                <div className='question-button-next'>
                    <NavLink to={props.link}><input className='question-button' type="button" value={props.next} /></NavLink>
                </div>

            </div>
        </Route>

    )
}