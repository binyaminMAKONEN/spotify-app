import {React,useEffect }from 'react'
import { FaUser } from 'react-icons/fa'
import "../styles/MainContainer.css"
import AudioList from './AudioList'
import Banner from './Banner'
const MainContainer = () => {
    useEffect(()=>{
        const allLi =document.querySelector('.mainContainer ul').querySelectorAll("li")
        allLi.forEach((element)=> element.addEventListener("click",()=> {
            allLi.forEach(element=>element.classList.remove("active"));
            element.classList.add("active") 
    }))
    },[])
  return (
    <div className='mainContainer'>
        <Banner/>
        <div className='menuList'>
            <ul>
                <li><a href='#'>Popular</a></li>
                <li><a href='#'>Album</a></li>
                <li><a href='#'>Song</a></li>
                <li><a href='#'>Fans</a></li>
                <li><a href='#'>About</a></li>
            </ul>
            <p><i><FaUser/></i>12.3M <span>Followers</span></p>
        </div>
        <AudioList/>
    </div>
  )
}

export default MainContainer