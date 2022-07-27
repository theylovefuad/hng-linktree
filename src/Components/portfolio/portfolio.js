import React from "react";
import './portfolio.css'
import shoppingimg from '../../assets/shopping.png'
import reactapp from '../../assets/React App - Google Chrome 7_24_2022 11_04_03 AM.png'
import foodapp from '../../assets/food.png'
import social from '../../assets/social.png'

export default function Portfolio (){
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            
            <div className='container portfolio__container'>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={shoppingimg} alt=""/>
                    </div>
                        <h3>Online Shopping Site with Django</h3>
                        <a href="https://maveng.pythonanywhere.com" className="btn" target='__blank'>Visit Website</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={reactapp} alt=""/>
                    </div>
                        <h3>Quiz App with React JS</h3>
                        <a href="https://mavequiz.netlify.app" className="btn" target='__blank'>Visit Website</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={foodapp} alt=""/>
                    </div>
                        <h3>Food Ordering Website</h3>
                        <a href="https://themaverickfuad.pythonanywhere.com" className="btn" target='__blank'>Visit Website</a>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={social} alt=""/>
                    </div>
                        <h3>Social Media App with Django</h3>
                        <a href="#" className="btn" target='__blank'>Visit Website</a>
                </article>

            </div>
        </section>
    )

}