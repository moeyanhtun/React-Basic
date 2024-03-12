import React from 'react'
import './index.css'
export default function index({ posts }) {
    return (
        <div className='postlist'>
            {posts.map((post) => (
                <h1 key={post.id}>{post.title}</h1>
            ))}
        </div>
    )
}