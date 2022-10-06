import React from 'react'
import {FaPlus} from "react-icons/fa"
import {BsMusicNoteList,BsTrash} from "react-icons/bs"
import PlayList from "./Playlist"

const menuPlaylist = () => {
  return (
    <div className='playlistContainer'>
        <div className='nameContainer'>
            <p>playlist</p>
            <i><FaPlus/></i>
        </div>
        <div className='playlistScrollContainer'>
          {
            PlayList && PlayList.map((list)=>(

          <div className='playlist' key={list.id}>

          <i className='list'><BsMusicNoteList/></i>

          <p>{list.name}</p>
          <i className='trash'><BsTrash/></i>
          </div>
            ))
          }
          
        </div>
    </div>
  )
}

export default menuPlaylist