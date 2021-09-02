import { Bookmark, Event, HelpOutline, Message, RssFeed, School, WorkOutline } from '@material-ui/icons'
import React from 'react'

// css
import './Leftbar.css'

function LeftBar() {
    return (
        <div className="left">
            <div className="left__container">
                <ul className="left__lists">
                    <li className="left__list">
                        <RssFeed className="list__icon" />
                        <span className="list__text">Feed</span>
                    </li>
                    <li className="left__list">
                        <School className="list__icon" />
                        <span className="list__text">Course</span>
                    </li>
                    <li className="left__list">
                        <Event className="list__icon" />
                        <span className="list__text">Events</span>
                    </li>
                    <li className="left__list">
                        <WorkOutline className="list__icon" />
                        <span className="list__text">Jobs</span>
                    </li>
                    <li className="left__list">
                        <HelpOutline className="list__icon" />
                        <span className="list__text">Help</span>
                    </li>
                    <li className="left__list">
                        <Bookmark className="list__icon" />
                        <span className="list__text">Bookmark</span>
                    </li>
                    <li className="left__list">
                        <Message className="list__icon" />
                        <span className="list__text">Chat</span>
                    </li>
                </ul>
                <button className="left__button">Show More</button>
                <hr className="left__hr"/>

                <ul className="left__friend__lists">
                    <li className="left__friend__list">
                        <img src="/assets/myphoto.jpg" alt="" className="friend__icon"/>
                        <span className="friend__text">Govindha</span>
                    </li>
                    <li className="left__friend__list">
                        <img src="/assets/myphoto.jpg" alt="" className="friend__icon"/>
                        <span className="friend__text">Namesta</span>
                    </li>
                    <li className="left__friend__list">
                        <img src="/assets/myphoto.jpg" alt="" className="friend__icon"/>
                        <span className="friend__text">Namesta</span>
                    </li>
                    <li className="left__friend__list">
                        <img src="/assets/myphoto.jpg" alt="" className="friend__icon"/>
                        <span className="friend__text">Namesta</span>
                    </li>
                    <li className="left__friend__list">
                        <img src="/assets/myphoto.jpg" alt="" className="friend__icon"/>
                        <span className="friend__text">Namesta</span>
                    </li>
                    <li className="left__friend__list">
                        <img src="/assets/myphoto.jpg" alt="" className="friend__icon"/>
                        <span className="friend__text">Namesta</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftBar
