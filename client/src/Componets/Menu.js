import React, { useEffect } from 'react'


function Menu({title,menuObject}) {

    useEffect(()=>{
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