import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiProgression} from 'react-icons/gi'
import {BiMessageSquareDetail} from 'react-icons/bi'


export default function Nav (){
    const [activeNav, setActiveNav] = React.useState('#')
    return(
        <nav>
            <a href="#header" onClick={()=>setActiveNav('#')}
             className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#services" onClick={()=>setActiveNav('#services')}
            className={activeNav === '#services' ? 'active' : ''}><GiProgression/></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')}
            className={activeNav === '#portfolio' ? 'active' : ''}><BiMessageSquareDetail/></a>

        </nav>
    )

}