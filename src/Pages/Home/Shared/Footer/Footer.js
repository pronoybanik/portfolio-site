import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='px-2'>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content max-w-7xl">
                <div className="items-center">
                    <p className='flex gap-2'><FaHome className='text-3xl hover:text-sky-600' /><div className=' font-semibold font-mono text-2xl mb-2'>Feni</div></p>

                    <p className='flex gap-2'><FaPhone className='text-3xl hover:text-sky-600' /><a href="tel:+8801609520709" className=' font-semibold font-mono text-2xl mb-2 ml-2'>01609520719</a></p>
                    {/* <p className='flex gap-2'><FaMailBulk className='text-3xl hover:text-sky-600' /><div className=' font-medium font-mono text-2xl mb-2'>pronoybanik82@gmail.com</div></p> */}
                    <p className='flex gap-2'><FaMailBulk className='text-3xl hover:text-sky-600' /><a className=' font-medium font-mono text-2xl mb-2' href="mailto:pronoybanik82@gmail.com">pronoybanik82@gmail.com</a></p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                    <a href='https://www.facebook.com/pronoy.banik.7' target="_blank"><FaFacebook className='text-3xl hover:text-sky-600' /></a>
                    <a href='https://github.com/pronoybanik' target="_blank"><FaGithub className='text-3xl hover:text-sky-600' /></a>

                    <a href='https://wa.me/+8801858604911' target="_blank"><FaWhatsapp className='text-3xl hover:text-sky-600' /></a>
                    <a href='https://www.linkedin.com/in/pronoy-banik-1b5a3125a/' target="_blank"><FaLinkedin className='text-3xl hover:text-sky-600' /></a>

                </div>
            </footer>
        </div>
    );
};

export default Footer;