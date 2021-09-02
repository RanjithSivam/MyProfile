import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getAllPosts } from '../Services/PostService'

//css
import './CenterBar.css'
import Post from './Post'
import Share from './Share'

function CenterBar({profile}) {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts();
    },[])

    const getPosts = async () => {
        const result = await getAllPosts();
        setPosts(result.data);
    }

    return (
        <div className="center">
            <div className="center__container">
                {!profile && <Share />}
                {/* <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post /> */}
                {posts.map(post=><Post key={post.id} {...post} />)}
            </div>
        </div>
    )
}

export default CenterBar
