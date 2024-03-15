import React from 'react'
import './index.css'
import { useState } from 'react';
import { useRef } from 'react';

export default function
    PostForm({ setShowModel, newPost }) {
    let title = useRef();
    let restart = () => {
        title.current.value = '';
    }
    let postSubmit = (e) => {
        let post =
        {
            id: Math.floor(Math.random() * 1000),
            title: title.current.value
        };
        e.preventDefault();
        restart()
        newPost(post);
    }
    return (

        <div>
            <form className='postForm' onSubmit={postSubmit}>
                <h3>Create Post</h3>
                <label>Post Name</label>
                <input type="text" ref={title} />
                <div>
                    <button type='submit' className='blue' >Post</button>
                    <button type='button' className='red' onClick={() => setShowModel(false)} >Close</button>
                </div>
            </form>
        </div>
    )
}
