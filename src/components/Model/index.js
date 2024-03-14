import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'

export default function model({ children, danger = false }) {
    let className = danger ? 'border-red' : 'border-blue';
    return (
        ReactDOM.createPortal(
            <div className='model-component'>
                <div className='model-backdrop' >
                    <div className={`model ${className}`}
                    >
                        {children}
                    </div>
                </div>
            </div>
            , document.getElementById('model')
        )

    )
}
