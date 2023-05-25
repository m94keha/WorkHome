import React from 'react' //6.9k (qzipped: 2.7k)
import { NavLink } from 'react-router-dom'

export default function Start() {
    return (
        <div className='start-wrapper'>
            <NavLink to="/1">
                <input className='start-button' type='button' value="Start" />
            </NavLink>
        </div>
    )
}