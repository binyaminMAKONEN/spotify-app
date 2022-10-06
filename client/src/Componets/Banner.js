import React from 'react'
import artist from "../img/artist.jpg"
import check from "../img/check.png"
import {FaEllipsisH,FaHeadphones,FaCheck} from "react-icons/fa"
const Banner = () => {
  return (
    <div className='Banner'>
        <img src={artist} alt="" className='bannerImg'/>
        <div className='content'>
            <div className='breadCrump'>
                <p>Home<span>/Popular Artist</span></p>
                <i><FaEllipsisH/></i>
            </div>
            <div className='artist'>
                <div className='left'>
                    <div className='name'>
                    <h2>benja-m</h2>
                    <img src={check} alt=""/>
                    </div>
                    <p><i><FaHeadphones/></i> 11,184,819<span>Monthly listen </span></p>
                </div>
                <div className='right'>
                    <a href="#">Play</a>
                    <a href="#"><FaCheck/>Following</a>
                </div>
            </div>
        </div>
        <div className='bottom'></div>
    </div>
  )
}

export default Banner