import React from 'react'
import './index.css'
import { useState } from 'react';

export default function
    PostForm({ setShowModel, newPost }) {

    let restart = () => {
        setTitle('')
    }
    let postSubmit = (e) => {
        let post =
        {
            id: Math.floor(Math.random() * 1000),
            title: title
        };
        e.preventDefault();
        restart();
        newPost(post)
    }
    let [title, setTitle] = useState('');
    return (

        <div>
            <form className='postForm' onSubmit={postSubmit}>
                <h3>Create Post</h3>
                <label>Post Name</label>
                <input type="text" onChange={(e) => { setTitle(e.target.value) }} value={title} />
                <div>
                    <button type='submit' className='blue' >Post</button>
                    <button type='button' className='red' onClick={() => setShowModel(false)} >Close</button>
                </div>
            </form>
        </div>
    )
}
