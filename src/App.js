import React from "react";
import Header from "./Components/header/header";
import Nav from "./Components/nav/nav"
import About from "./Components/about/about"
import Experience from "./Components/experience/experience";
import Contact from "./Components/contact/contact"
import Portfolio from "./Components/portfolio/portfolio";
import Footer from "./Components/footer/footer"
import './index.css'

export default function App () {
    return(
        <div>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}