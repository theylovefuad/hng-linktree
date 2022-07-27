import React from "react"
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


export default function HeaderSocials () {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com/in/fuad-olaleye-53087a220" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/theylovefuad"target="_blank"><FaGithub/></a>

        </div>
    )
}