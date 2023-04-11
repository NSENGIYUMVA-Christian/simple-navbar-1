import React from 'react'
import {useState} from "react"
import {FaBars} from "react-icons/fa";
import {links,social} from "./data"
import logo from "./assets/chris logo 3.png"

const Navbar = () => {
    const [showlinks, setShowlinks] = useState(false)
const toggleLinks = ()=>{
   setShowlinks(!showlinks)
}

  return (
    <nav>
        <div className="nav-center">
            <div className="nav-header">
                <img src={logo} height="40px" className="logo" alt="logo"/>
                <button className="nav-toggle" onClick={toggleLinks} ><FaBars/></button>
            </div>
          <div className={ showlinks ? `links-container show-container`:`links-container`}>
                <ul className="links">
                    {links.map((link)=>{
                        const {id,url,text} = link
                        return <li key={id} >
                         <a href={url}>{text}</a>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar