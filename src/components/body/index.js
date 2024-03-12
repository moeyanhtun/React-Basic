import React from 'react'
import PostList from '../postLists/index'
import './index.css'

export default function Body({ posts }) {
    return (
        <div className='container'>
            <PostList posts={posts} />
        </div>
    )
}
