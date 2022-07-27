import React from 'react'
import './about.css'
import about from '../../assets/about-photo.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About (){
    return(
        <section id="about">
            <h5>Get TO Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={about} alt="about"/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about-icon'/>
                            <h5>Experience</h5>
                            <span>1 year experience in frontend web development.</span>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about-icon'/>
                            <h4>Projects</h4>
                            <span>Good number of completed projects.</span>
                        </article>

                    </div>
                        <p>
                            Basically, I am an entry level web developer with a good understanding of frontend web development.
                            My primary aim as of now is to find internships/entry-level roles. I am also capable of developing
                            fullstack websites using Python as an OOP.
                        </p>
                        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}