import React from 'react';
import { Link } from 'react-router-dom';
import Skills from '../../../../Component/Skills/Skills';

const Navbar = () => {

    // const MenuBar = <>
    //     <Link className='btn btn-ghost font-serif btn-sm font-bold text-white ' to="HOME" ></Link>
    //     <Link href="skill" className='btn btn-ghost font-serif btn-sm font-bold text-white'  >skill</Link>
    //     {/* <Link className='btn btn-ghost font-serif btn-sm font-bold text-white' to="/from">From</Link> */}
    // </>

    return (
        <div className='sticky '>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {MenuBar}
                        </ul>
                    </div> */}
                    <Link className="btn btn-ghost normal-case text-xl btn-sm font-serif text-gray-600" to="/"><p className='text-amber-500 uppercase'>port folio</p></Link>

                </div>
                {/* <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {MenuBar}
                    </ul>
                </div>

                <label htmlFor="drawer-box" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label> */}

            </div>
        </div>
    );
};

export default Navbar;