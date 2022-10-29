import React, { useState } from "react";
import { buttons } from "./buttons";
import './App.css'

export default function App() {
    const [name, setName] = useState('Olaleye Fuad')
    return (
        <div className='app py-16'>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <img className='display mb-4' src='https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=600' alt={name} id='profile__img' />
                    <h3 className="name text-center" id='twitter'>{name}</h3>
                    <h4 className="name text-center hidden" id='slack'>Fuad</h4>
                </div>
            </div>
            <div className="py-14 flex flex-col items-center space-y-5">
                {
                    buttons.map((button) => {
                        return (
                            <a key={button.id} href={button.link} target='_blank' rel='noreferrer' className="anchor w-5/6 md:w-3/4 py-5 shadow-sm flex flex-col space-y-2 items-center">
                                <p>{button.name}</p>
                                <sub>{button.sub}</sub>
                            </a>
                        )
                    })
                }
                <div className="pt-5 flex items-center space-x-3">
                    <img src="https://img.icons8.com/color/2x/slack-new.png" alt="slack" className="twin" />
                    <img src="https://img.icons8.com/ios-glyphs/2x/github.png" alt="github" className="twin" />
                </div>

            </div>
            <div className="flex items-center justify-center">
                <div className="borderr md:w-3/4 w-4/5 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between p-6">
                    <img src="https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1" alt="" className="sponsor" />
                    <p>HNG Internship 9 Frontend Track</p>
                    <img src="https://internship.zuri.team/static/media/logo.36d2d48a.svg" alt="" className="sponsor" />
                </div>
            </div>
        </div>
    )
}
