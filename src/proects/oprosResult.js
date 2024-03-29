import React from 'react' //6.9k (qzipped: 2.7k)
import { NavLink } from 'react-router-dom'

export default function Result() {
    return (
        <div className='result-wrapper'>
            <h2 className='result-title'>RIGHT ANSWERS:</h2>
            <div className='result-count'>0</div>
            <NavLink to=""><input className='result-button' type='button' value="RESTART" /></NavLink>
        </div>
    )

}