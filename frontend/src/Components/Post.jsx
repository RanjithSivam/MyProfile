import { MoreVert } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserById } from '../Services/PostService'

//css
import './Post.css'

function Post({id,content,likes,imageUrl,userId,title,hits}) {

    const [user, setUser] = useState([])

    useEffect(()=>{
        getUser();
    },[])

    const getUser = async () => {
        const result = await getUserById(userId);
        setUser(result.data);
    }
    return (
        <div className="post">
            <div className="post__container">
                <div className="post__top">
                    <div className="top__left">
                        <img src={user.avatar} alt="" className="profile__logo"/>
                        <span className="profile__name"><Link to={`/dashboard/profile/${userId}`}>{user.username}</Link></span>
                        <span className="profile__time">5 mins ago</span>
                    </div>
                    <div className="top__right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post__center">
                    <span className="post__text">{content}</span>
                    <img src={`https://picsum.photos/seed/${id+userId+hits}/500`} alt="" className="post__image" />
                </div>
                <div className="post__bottom">
                    <div className="bottom__left">
                        <img data-num={1} src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/like.png" className="like__icon"/>
                        <img data-num={2} src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/heart.png" className="like__icon"/>
                        <span className="like__counter">{likes} people like it</span>
                    </div>
                    <div className="bottom__right">
                        <span className="comment__text">{hits} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
