import { MoreVert } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addLike, getUserById } from '../Services/PostService'

//css
import './Post.css'

function Post({_id,description,userId,likes,image}) {

    const [user, setUser] = useState([])
    const auth = useSelector(state => state.auth)
    const [images, setImages] = useState(null)

    useEffect(()=>{
        getUser();
        getImage();
    },[])

    const getImage = async () => {
        if(image){
            const {data} = await axios.get(`/api/post/postImage/${image}`);
            setImages(data)
        }
    }

    const getUser = async () => {
        const result = await getUserById(userId);
        setUser(result.data)
    }

    const like = async () => {
        const result = await addLike(auth.user._id,_id);
    }

    return (
        <div className="post">
            <div className="post__container">
                <div className="post__top">
                    <div className="top__left">
                        <img src={`https://picsum.photos/seed/${userId+"1"}/500`} alt="" className="profile__logo"/>
                        <span className="profile__name"><Link to={`/dashboard/profile/${userId}`}>{user.username}</Link></span>
                        <span className="profile__time">5 mins ago</span>
                    </div>
                    <div className="top__right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post__center">
                    <span className="post__text">{description}</span>
                    <img src={ !images ?`https://picsum.photos/seed/${userId}/500`:`data:${images.content};base64,${images.image.toString('base64')}`} alt="" className="post__image" />
                </div>
                <div className="post__bottom">
                    <div className="bottom__left">
                        <img data-num={1} src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/like.png" className="like__icon" onClick={like}/>
                        <img data-num={2} src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/heart.png" className="like__icon" onClick={like}/>
                        <span className="like__counter">{likes.length} people like it</span>
                    </div>
                    <div className="bottom__right">
                        <span className="comment__text">{likes.length} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
