import React from 'react';
import REACT from '../../Asset/developement-logo/react/download (1).png'
import Mongo from '../../Asset/developement-logo/mongoose/icons8-mongodb-48.png'
import Firebase from '../../Asset/developement-logo/firebase/icons8-firebase-48.png'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import img from '../../Asset/Screenshot 2023-05-19 003743.png'
import img1 from '../../Asset/Screenshot 2023-05-19 190854.png'
import img2 from '../../Asset/Screenshot 2023-05-19 233746.png'
import img3 from '../../Asset/Screenshot 2023-08-14 213442.png'
import img4 from '../../Asset/Screenshot 2023-11-02 190120.png'
import img5 from '../../Asset/Screenshot 12.png'
import img6 from '../../Asset/Screenshot 2024-05-12 105003.png'
import img7 from '../../Asset/Screenshot 2024-07-01 111700.png'
import express from '../../Asset/developement-logo/ex/download (1).png'
import tailwind from '../../Asset/developement-logo/tailwind/download.png'
import redux from '../../Asset/developement-logo/redux/download.png'
import typeSript from '../../Asset/developement-logo/typesript/download (1).png'
import angular from '../../Asset/developement-logo/anguler/icons8-angular-480.png'

const ProjectsCard = () => {
    const images = [
        typeSript, redux, REACT, tailwind, express, Mongo, Firebase, angular
    ];


    return (
        <div className='mt-20'>
            <h1 className='text-5xl text-white font-serif my-12  text-center uppercase border-4
             border-indigo-400 border-l-indigo-500 w-96 mx-auto
              border-b-indigo-500 py-3 
             ' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >My  project </h1>

            <section className='container relative my-4  md:mt-36 mb-[100px]'>
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {/* 1 */}
                    <div className="w-[100%] border-[#ffffff83] border-[1px] h-[460px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectOne text-white mx-auto"> <img src={img} className='h-full' alt="" /> </div>
                        <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
                            <h1 className="text-2xl py-4 font-semibold text-black uppercase font-serif"> Mobile planet</h1>
                            <p className={`text-xm font-semibold text-para hidden group-hover:block text-black `}>This is a second mobile selling site where second mobiles can be bought and sold.</p>
                            <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                                {
                                    images.slice(2, 7).map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                                }
                            </div>
                            <div className="flex gap-3 py-2">
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://mobile-seller-ef181.web.app/" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://github.com/pronoybanik/mobile-client-site" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://github.com/pronoybanik/mobile-server-site" rel="noreferrer" aria-label="github-backend"><FaGithub /></a>


                            </div>
                        </div>
                    </div>


                    {/* 2 */}
                    <div className="w-[100%] border-[#ffffff83] border-[1px] h-[460px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectOne text-white mx-auto"> <img src={img1} className='h-full w-full' alt="" /> </div>
                        <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
                            <h1 className="text-2xl py-4 font-semibold text-black font-serif ">world site photo</h1>
                            <p className={`text-xm font-semibold text-para hidden group-hover:block text-black `}>This is a world photography site where you can enter the site and give reviews by looking at the pictures.</p>
                            <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                                {
                                    images.slice(2, 7).map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                                }
                            </div>
                            <div className="flex gap-3 py-2">
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://assignmests-11.web.app/" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://github.com/pronoybanik/photographer-client-site" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://github.com/pronoybanik/Photographer-service-site" rel="noreferrer" aria-label="github-backend"><FaGithub /></a>


                            </div>
                        </div>
                    </div>


                    {/* 3 */}
                    <div className="w-[100%] border-[#ffffff83] border-[1px] h-[460px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectOne text-white mx-auto"> <img src={img2} className='h-full w-full' alt="" /> </div>
                        <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
                            <h1 className="text-2xl py-4 font-semibold  font-serif uppercase">dev hive</h1>
                            <p className={`text-xm font-semibold text-para hidden group-hover:block  `}>Local Freelancing marketplace Easy sharing and getting service Local payment Method with ssl Commers. Realtime chating feature with socket.oi</p>
                            <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                                {
                                    images.slice(1, 7).map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                                }
                            </div>
                            <div className="flex gap-3 py-2">
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://devhiveclient.vercel.app/" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://github.com/hasanshahriar32/devhiveclient" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://github.com/hasanshahriar32/devhiveserver" rel="noreferrer" aria-label="github-backend"><FaGithub /></a>


                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="w-[100%] border-[#ffffff83] border-[1px] h-[460px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectOne text-white mx-auto"> <img src={img3} className='h-full w-full' alt="" /> </div>
                        <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
                            <h1 className="text-2xl py-4 font-semibold  font-serif uppercase">GOENKA' S FASHION</h1>
                            <p className={`text-xm font-semibold text-para hidden group-hover:block  `}>Local Freelancing marketplace Easy sharing and getting service Local payment Method with ssl Commers. Realtime chating feature with socket.oi</p>
                            <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                                {
                                    images.slice(2, 4).map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                                }
                            </div>
                            <div className="flex gap-3 py-2">
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://endearing-bombolone-423742.netlify.app/" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                                <a className='bg-black  p-1 rounded-lg' target="_blank" href="https://github.com/pronoybanik/Fashion-site" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>


                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="w-[100%] border-[#ffffff83] border-[1px] h-[460px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectOne text-white mx-auto"> <img src={img4} className='h-full w-full' alt="" /> </div>
                        <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
                            <h1 className="text-2xl py-4 font-semibold  font-serif uppercase text-black">LIFE SEVER</h1>
                            <p className={`text-xm font-semibold text-para hidden group-hover:block text-black `}>Life Sever is   Hospital website Help For people, People will be able to make appointments with doctors and solve their problems from the comfort of their homes </p>
                            <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                                {
                                    images.slice(2, 6).map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                                }
                            </div>
                            <div className="flex gap-3 py-2">
                                <a className='bg-black  p-1 rounded-lg' title='Live Site Link' target="_blank" href="https://life-sever.web.app/" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                                <a className='bg-black  p-1 rounded-lg' title='Git client Site' target="_blank" href="https://github.com/pronoybanik/life-sever-clientSite" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                                <a className='bg-black  p-1 rounded-lg' title='Git server site' target="_blank" href="https://github.com/pronoybanik/life-sever-serversite" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>


                            </div>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="w-[100%] border-[#ffffff83] border-[1px] h-[460px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectOne text-white mx-auto"> <img src={img5} className='h-full w-full' alt="" /> </div>
                        <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
                            <h1 className="text-2xl py-4 font-semibold  font-serif uppercase text-black">Foodie Haven</h1>
                            <p className={`text-xm font-semibold text-para hidden group-hover:block text-black `}>Foodie Haven: Indulge in a culinary journey at our web sanctuary. Explore delectable recipes, foodie tips, and a feast of gastronomic delights. Savor the flavor!</p>
                            <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                                {
                                    images.slice(0, 6).map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                                }
                            </div>
                            <div className="flex gap-3 py-2">
                                <a className='bg-black  p-1 rounded-lg' title='Live Site Link' target="_blank" href="https://foodie---haven-1d1d1.web.app/" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                                <a className='bg-black  p-1 rounded-lg' title='Git client Site' target="_blank" href="https://github.com/pronoybanik/Acc-manegment-clientsite" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                                <a className='bg-black  p-1 rounded-lg' title='Git server site' target="_blank" href="https://github.com/pronoybanik/mongoose-module-8-10" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                            </div>
                        </div>
                    </div>
                    {/* 7 */}
                    <div className="w-[100%] border-[#ffffff83] border-[1px] h-[460px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectOne text-white mx-auto"> <img src={img6} className='h-full w-full' alt="" /> </div>
                        <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[40%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
                            <h1 className="text-2xl py-4 font-semibold  font-serif uppercase text-black">E-Commerce</h1>
                            <p className={`text-xm font-semibold text-para hidden group-hover:block text-black `}>That is Normal E-commerce project , create by Angular</p>
                            <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                                {
                                    images.slice(-1).map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                                }
                            </div>
                            <div className="flex gap-3 py-2 ">
                                <a className='bg-black  p-1 rounded-lg' title='Live Site Link' target="_blank" href="https://anguler-e-commerce-project.vercel.app/" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                                <a className='bg-black  p-1 rounded-lg' title='Git client Site' target="_blank" href="https://github.com/pronoybanik/Anguler-e-commerce-project" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                                <a className='bg-black  p-1 rounded-lg' title='Git server site' target="_blank" href="https://github.com/pronoybanik/anguler-e-commer-server" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                            </div>
                        </div>
                    </div>

                    {/* 8 */}
                    <div className="w-[100%] border-[#ffffff83] border-[1px] h-[460px] rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] text-white mx-auto" data-aos="zoom-in-up"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                    >
                        <div className="w-[100%]   h-full rounded-md   relative bg-top bg-no-repeat bg-cover hover:bg-bottom ease-linear duration-[5000ms] bg-projectOne text-white mx-auto"> <img src={img7} className='h-full w-full' alt="" /> </div>
                        <div className={`group p-2 absolute left-4 bottom-4 bg-white/20 backdrop-blur-md w-11/12 rounded-md  hover:duration-300 ease-in-out hover:h-[50%] hover:w-[100%] overflow-hidden hover:left-0 hover:bottom-0 `}>
                            <h1 className="text-2xl py-4 font-semibold  font-serif uppercase text-black"> CONTINENTAL TABLE RESTAURANT</h1>
                            <p className={`text-xm font-semibold text-para hidden group-hover:block text-black `}>
                                That is a   Restaurant web site , there has a lot Food . user can order her beloved Food
                            </p>
                            <div className="mt-4 hidden group-hover:flex flex-wrap items-center justify-start gap-4 mx-auto expertise  cursor-pointer">

                                {
                                    images.slice(2, 7).map((img, i) => <img key={i} src={img} alt="" className="w-5" />)
                                }
                            </div>
                            <div className="flex gap-3 py-2">
                                <a className='bg-black  p-1 rounded-lg' title='Live Site Link' target="_blank" href="https://continental-table.web.app/" rel="noreferrer" aria-label="live link" ><FaExternalLinkAlt /></a>
                                <a className='bg-black  p-1 rounded-lg' title='Git client Site' target="_blank" href="https://github.com/pronoybanik/continental-table-frontend" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                                <a className='bg-black  p-1 rounded-lg' title='Git server site' target="_blank" href="https://github.com/pronoybanik/continental-table-server" rel="noreferrer" aria-label="github-frontend"><FaGithub /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ProjectsCard;