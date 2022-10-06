import React, { useEffect } from 'react'


function Menu({title,menuObject}) {
    
    
    useEffect(()=>{
        const allLi =document.querySelector('.menuContainer ul').querySelectorAll("li")
        allLi.forEach((element)=> element.addEventListener("click",()=> {
            allLi.forEach(element=>element.classList.remove("active"));
            element.classList.add("active") 
    }))
    },[])
  return (
    <div className='menuContainer'>
        <p className='title'>{title}</p>
        <ul>
            {menuObject && menuObject.map((menuList)=>(
                <li key={menuList.id}>
                    <a href="#">
                        <span>{menuList.icon}</span>
                        <span>{menuList.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Menu