import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../photo/istockphoto-1139459625-612x612.jpg'


const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 text-5xl font-serif uppercase text-white">Hi, i am a pronoy banik</h1>
                        <p className="mb-5 uppercase text-xl font-sans text-white">I am e React web Developer , font end and back end , its my Hobby and passion</p>
                        <Link to='/myDetails'>
                            <button className="
                        btn  bg-gradient-to-r from-primary to-secondary text-white
                        w-1/4  font-serif ">More Details</button>

                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;