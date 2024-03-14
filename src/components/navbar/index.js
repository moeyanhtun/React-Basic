import React from 'react'
import './index.css';
import styles from './navbar.module.css'

export default function
    navbar({ setShowModel }) {
    return (
        <nav className={`navbar ${styles.card}`}>
            <div className='menu container'>
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
