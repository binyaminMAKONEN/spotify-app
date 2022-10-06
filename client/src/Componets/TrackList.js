import React from 'react'
import{BsFillVolumeUpFill,BsMusicNoteList}  from "react-icons/bs"
import{FaDesktop}  from "react-icons/fa"
import track from "../img/track.png"

const TrackList = () => {
  return (
    <div className="trackList">
        <div className="top">
            <img src={track} alt=''/>
            <p>
                simple name <span>artis</span>
            </p>
        </div>
        <div className="bottom">
            <i><BsFillVolumeUpFill/></i>
            <input type="range"/>
            <i><BsMusicNoteList/></i>
            <i><FaDesktop/></i>
        </div>
    </div>
  )
}

export default TrackList