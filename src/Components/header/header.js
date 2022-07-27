import React from "react";
import './header.css'
import CTA from './CTA';
import Me from '../../assets/fuad.png'
import HeaderSocials from "./headerSocials";

export default function Header() {
    return(
        <header id="header">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Olaleye Fuad</h1>
                <h5 className="text-light"> Web Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={Me} alt=""/>
                </div>
                <a href="#contact" className="scroll__down">Scroll down</a>
            </div>
        </header>
    )
}