import React from 'react'
import './index.css';

export default function
    navbar({ setShowModel }) {
    return (
        <nav>
            <div className='menu'>
                <h1>Logo</h1>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li onClick={() => setShowModel(true)}>Sign In</li>
                </ul>
            </div>
        </nav>
    )
}
