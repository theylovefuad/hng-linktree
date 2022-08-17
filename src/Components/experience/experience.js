import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export default function Experience (){
    return (
        <section id="services">
            <h5>My Skills</h5>
            <h2>My Experience</h2>
            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Tailwind CSS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>React JS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>JQuery</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                    </div>
                </div>
                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Python</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h4>Django</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>)
}