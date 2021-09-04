import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getPostById, getTimeLine} from '../Services/PostService'
import { useParams } from 'react-router-dom'

//css
import './CenterBar.css'
import Post from './Post'
import Share from './Share'

function CenterBar({profile}) {

    const [posts, setPosts] = useState([]);
    const auth = useSelector(state => state.auth)
    const { id } = useParams();
    

    useEffect(()=>{
        if(profile){
            getUserPost();
        }else{
            getPosts();
        }
    },[])

    const getPosts = async () => {
        const result = await getTimeLine(auth.user._id);
        setPosts(result.data);
    }

    const getUserPost = async () => {
        const result = await getPostById(id);
        setPosts(result.data);
    }

    console.log(posts);

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
                {posts.map(post=><Post key={post._id} {...post} />)}
            </div>
        </div>
    )
}

export default CenterBar
