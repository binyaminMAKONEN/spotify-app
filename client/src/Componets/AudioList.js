import React from 'react'
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import Songs from './Song'
const AudioList = () => {
  return (
    <div className='AudioList'>
 <h2 className='title'>
The list <span>{`${Songs.length} songs`}</span>
 </h2>
 <div className='songsContainer'>
       {
      Songs &&  Songs.map((song,i)=>(

    <div className='songs' key={i}>
        <div className='count'>#0{song.id}</div>
        <div className='song'>
            <div className='imgBox'><img src={song?.imgSrc} alt=''/></div>
            <div className='section'>
                <p className='songName'>
                    {song.songName}<span className='songName'>{song.artist}</span>
                </p>
                <div className='hits'>
                    <p className='hit'>
                        <i><FaHeadphones/></i>
                        95,490,102
                    </p>
                    <p className='duration'>
                        <i><FaRegClock/></i>
                        03.04
                    </p>
                    <div className='favourite'>
                        {
                            song?.favourite ?<i><FaHeart/></i> : <i><FaRegHeart/></i>
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
      ))
       }
 </div>
    </div>
  )
}

export default AudioList