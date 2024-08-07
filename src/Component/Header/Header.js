import React from 'react';
import backgroundImage from '../../Asset/istockphoto-1139459625-612x612.bb4d5cbf0baa2c1525ad.jpg'
import resume from '../../Asset/cv/my-cv.pdf'

const Header = () => {
    return (
        <div >
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <h1 className="mb-5 text-5xl font-serif uppercase text-white">Hi, I am PRONOY BANIK</h1>
                        <p className="mb-5 uppercase text-xl font-sans text-white">I AM A JAVASCRIPT AND REACT DEVELOPER, FRONT-END AND BACK-END
                            <br />IT'S MY HOBBY AND PASSION</p>

                        <a href={resume} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500" download="pronoy banik resume">
                            <svg className="w-5 h-5 mr-2 hover:translate-y-1 duration-200 ease-linear" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            <span className="relative">Download resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;