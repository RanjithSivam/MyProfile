import React from 'react'

// css
import './RightBar.css'

const HomeRightBar = () => {
    return (
        <>
            <div className="birthday__container">
                <img src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/gift.png" className="birthday__icon" />
                <span className="birthday__text">
                    <b>Downey</b> and <b>3 other friends</b> have birthday
                </span>
            </div>
            <img src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/ad.png" alt="" className="ad__icon"/>
            <h4 className="right__friend__title">
                Online Friends
            </h4>
            <ul className="friend__lists">
                <li className="friend__list">
                    <div className="profile__image__container">
                        <img src={`https://picsum.photos/seed/picsum/500`} alt="" className="profile__image"/>
                        <span className="profile__online"></span>
                    </div>
                    <span className="profile__name">Pachiyappa</span>
                </li>
                <li className="friend__list">
                    <div className="profile__image__container">
                        <img src={`https://picsum.photos/seed/picsum/500`} alt="" className="profile__image"/>
                        <span className="profile__online"></span>
                    </div>
                    <span className="profile__name">Pachiyappa</span>
                </li>
                <li className="friend__list">
                    <div className="profile__image__container">
                        <img src={`https://picsum.photos/seed/picsum/500`} alt="" className="profile__image"/>
                        <span className="profile__online"></span>
                    </div>
                    <span className="profile__name">Pachiyappa</span>
                </li>
                <li className="friend__list">
                    <div className="profile__image__container">
                        <img src={`https://picsum.photos/seed/picsum/500`} alt="" className="profile__image"/>
                        <span className="profile__online"></span>
                    </div>
                    <span className="profile__name">Pachiyappa</span>
                </li>
            </ul>
        </>
    )
}

const ProfileRightBar = ({age,address,maritalStatus}) => {
    return (
        <>
            <h4 className="right__title">User Information</h4>
            <div className="right__infos">
                <div className="right__info">
                    <span className="info__key">Age:</span>
                    <span className="info__value">{age}</span>
                </div>
                <div className="right__info">
                    <span className="info__key">From:</span>
                    <span className="info__value">{address?.city}</span>
                </div>
                <div className="right__info">
                    <span className="info__key">RelationShip:</span>    
                    <span className="info__value">{maritalStatus}</span>
                </div>
            </div>
            <h4 className="right__friends">User Friends</h4>
            <div className="friends__lists">
                <div className="friends__list">
                    <img src={`https://picsum.photos/seed/${age*1}/500`} alt="" className="friends__icon"/>
                    <span className="friends__name">Mikey Jame</span>
                </div>
                <div className="friends__list">
                    <img src={`https://picsum.photos/seed/${age*2}/500`} alt="" className="friends__icon"/>
                    <span className="friends__name">Mikey Jame</span>
                </div>
                <div className="friends__list">
                    <img src={`https://picsum.photos/seed/${age*3}/500`} alt="" className="friends__icon"/>
                    <span className="friends__name">Mikey Jame</span>
                </div>
                <div className="friends__list">
                    <img src={`https://picsum.photos/seed/${age*4}/500`} alt="" className="friends__icon"/>
                    <span className="friends__name">Mikey Jame</span>
                </div>
                <div className="friends__list">
                    <img src={`https://picsum.photos/seed/${age*5}/500`} alt="" className="friends__icon"/>
                    <span className="friends__name">Mikey Jame</span>
                </div>
                <div className="friends__list">
                    <img src={`https://picsum.photos/seed/${age*6}/500`} alt="" className="friends__icon"/>
                    <span className="friends__name">Mikey Jame</span>
                </div>
            </div>
        </>
    )
}

function RightBar({profile,user}) {

    return (
        <div className="right">
            <div className="right__container">
                {profile ? <ProfileRightBar {...user} /> : <HomeRightBar />}
            </div>
        </div>
    )
}

export default RightBar
