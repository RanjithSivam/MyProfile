import { GitHub, Instagram, LinkedIn, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { signOut } from '../Actions/AuthActions';

// css
import './Navbar.css'

function Navbar() {

    const [showDrop, setShowDrop] = useState(false);
    
    const dispatch = useDispatch();
    const history = useHistory();

    const toggleDrop = () => {
        setShowDrop(!showDrop);
    }

    const logout = () => {
        history.push('/login')
        dispatch(signOut());
    }

    return (
        <nav className="navbar">
            <div className="navbar__left">
                <Link to="/dashboard" className="navbar__logo">MyProfile</Link>
            </div>
            <div className="navbar__center">
                <div className="search">
                    <Search className="search__icon"/>
                    <input type="text" placeholder="Search for projects" className="search__input" />
                </div>
            </div>
            <div className="navbar__right">
                <ul className="navbar__links">
                    <li className="navbar__link">
                        <Instagram />
                        <span className="navbar__link__count">5</span>
                    </li>
                    <li className="navbar__link">
                        <GitHub />
                        <span className="navbar__link__count">2</span>
                    </li>
                    <li className="navbar__link">
                        <LinkedIn />
                        <span className="navbar__link__count">7</span>
                    </li>
                </ul>
                <div className="navbar__profile">
                    <img src="/assets/myphoto.jpg" alt="profile image" className="navbar__profile__image" onClick={toggleDrop}/>
                    <div className={`navbar__dropdown ${showDrop?'show':''}`}>
                        <Link to="/dashboard/profile/17" className="dropdown__option">My Profile</Link>
                        <span className="dropdown__option" onClick={logout}>Log Out</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
