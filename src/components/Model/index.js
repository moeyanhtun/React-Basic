import React from 'react'
import './index.css'

export default function model({ children }) {
    return (
        <div className='model-backdrop'>
            <div className='model'>
                {children}
            </div>
        </div>
    )
}
