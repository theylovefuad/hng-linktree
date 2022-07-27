import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'



export default function Footer (){
    return(
        <footer>
            <a href="#" className='footer__logo'>MAVE</a>
            <ul className='permalinks'>
                <li><a href='#header'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#services'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://github.com/theylovefuad'><FaGithub/></a>
                <a href='https://instagram.com/theylovefuad'><FiInstagram/></a>
                <a href='https://twitter.com/theylovefuad'><FiTwitter/></a>
            </div>
        </footer>
    )
}