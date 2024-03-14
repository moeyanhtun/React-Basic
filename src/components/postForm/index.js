import React from 'react'
import './index.css'
import { useState } from 'react';

export default function
    PostForm({ setShowModel }) {

    let [title, setTitle] = useState('');
    return (

        <div>
            <form className='postForm'>
                <h3>Create Post</h3>
                <label>Post Name</label>
                <input type="text" onChange={(e) => { setTitle(e.target.value) }} />
                <h2>{title}</h2>
                <div>
                    <button className='blue'>Submit</button>
                    <button className='red' onClick={() => setShowModel(false)} >Close</button>
                </div>
            </form>
        </div>
    )
}
