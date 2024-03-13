import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'

export default function model({ children }) {
    return (
        ReactDOM.createPortal(
            <div className='model-backdrop'>
                <div className='model'>
                    {children}
                </div>
            </div>
            , document.getElementById('model')
        )

    )
}
