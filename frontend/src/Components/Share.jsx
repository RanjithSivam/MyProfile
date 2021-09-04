import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { addPost } from '../Services/PostService';

//css
import './Share.css'

function Share() {
    const [input, setInput] = useState("");
    const [fileData, setFileData] = useState("");
    const auth = useSelector(state => state.auth)

    const submitPost = async (e) =>{
        e.preventDefault();
        console.log("clicked")
        const result = await addPost(input,fileData,auth.user._id);
        console.log(result)
    }

    const setFile = (e) => {
        setFileData(e.target.files[0]);
    };

    return (
        <div className="share">
            <form className="share__container" onSubmit={submitPost}>
                <div className="share__top">
                    <img src="/assets/myphoto.jpg" alt="" className="share__logo"/>
                    <input type="text" placeholder="What is on your mind" className="share__input" value={input} onChange={e=>setInput(e.target.value)}/>
                </div>
                <hr className="share__hr" />
                <div className="share__bottom">
                    <div className="bottom__options">
                        <div className="bottom___option">
                            <PermMedia htmlColor="tomato" className="option__icon"/>
                            <input type="file" className="option__text" name="myPost" onChange={setFile} />
                            Photo or Video
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
                    <button className="share__button" type="submit">Share</button>
                </div>
            </form>
        </div>
    )
}

export default Share
