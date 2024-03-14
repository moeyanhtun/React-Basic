import React from 'react'
import './index.css'
import styles from './single-post.module.css'

export default function postList({ posts }) {
    return (
        <div className='postlist container'>
            {posts.map((post) => (
                <h1 className={`${styles.card}`} key={post.id}>{post.title}</h1>
            ))}
        </div>
    )
}