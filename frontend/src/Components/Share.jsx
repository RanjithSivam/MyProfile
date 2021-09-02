import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import React from 'react'

//css
import './Share.css'

function Share() {
    return (
        <div className="share">
            <div className="share__container">
                <div className="share__top">
                    <img src="/assets/myphoto.jpg" alt="" className="share__logo"/>
                    <input type="text" placeholder="What is on your mind" className="share__input" />
                </div>
                <hr className="share__hr" />
                <div className="share__bottom">
                    <div className="bottom__options">
                        <div className="bottom___option">
                            <PermMedia htmlColor="tomato" className="option__icon"/>
                            <span className="option__text">Photo or Video</span>
                        </div>
                        <div className="bottom___option">
                            <Label htmlColor="blue" className="option__icon"/>
                            <span className="option__text">Tag</span>
                        </div>
                        <div className="bottom___option">
                            <Room htmlColor="green" className="option__icon"/>
                            <span className="option__text">Location</span>
                        </div>
                        <div className="bottom___option">
                            <EmojiEmotions htmlColor="goldenrod" className="option__icon"/>
                            <span className="option__text">Feelings</span>
                        </div>
                    </div>
                    <button className="share__button">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
