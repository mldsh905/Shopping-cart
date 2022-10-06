import React from 'react';
import {NavLink} from "react-router-dom";
import './home.css'

const Home = () => {
    return (
        <div>
            <div className='home-background'>
                <div className='home-intro'>
                    <div className="home-intro-header">Home</div>
                    <div className="home-intro-content">
                        This is our story.
                    </div>
                    <div className="home-intro-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                        beatae culpa, debitis dignissimos distinctio ducimus error esse est explicabo facere incidunt
                        laboriosam maxime modi nihil optio, ratione sed totam veritatis.
                    </div>
                    <div className='btn-home-shop'>
                        <NavLink className='btn-home-shop-word' to='/shop'>Start Shopping</NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;