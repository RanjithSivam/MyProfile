import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CenterBar from '../Components/CenterBar'
import LeftBar from '../Components/LeftBar'
import Navbar from '../Components/Navbar'
import RightBar from '../Components/RightBar'
import { getUserById } from '../Services/PostService'

// css
import './Profile.css'

function Profile() {

    const [user, setUser] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        getUser();
    },[])

    const getUser = async () => {
        const result = await getUserById(id);
        setUser(result.data);
    }

    return (
        <>
             <Navbar />
            <div className="profile__container">
                <LeftBar />
                <div className="profile__right">
                    <div className="profile__top">
                        <div className="profile__cover">
                            <img src={`https://picsum.photos/seed/${id}/500`} alt="" className="profile__cover__icon"/>
                            <img src={`https://picsum.photos/seed/${id+"1"}/500`} alt="" className="profile__icon"/>
                        </div>
                        <div className="profile__info">
                            <h4 className="profile__name">{user.username}</h4>
                            <span className="profile__description">{user.email}</span>
                        </div>
                    </div>
                    <div className="profile__bottom">
                        <CenterBar profile userId={id}/>
                        <RightBar profile userId={id} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
