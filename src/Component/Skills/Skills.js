import React from 'react';
import { FcEngineering } from "react-icons/fc";
import SkillBlob from '../SkillBlob/SkillBlob';
import html from '../../Asset/developement-logo/html/html-svgrepo-com.svg'
import css from '../../Asset/developement-logo/css/download.png'
import js from '../../Asset/developement-logo/js/download (1).png'
import Bootstrap from '../../Asset/developement-logo/Bootstrap/download.png'
import Tailwind from '../../Asset/developement-logo/tailwind/download.png'
import Github from '../../Asset/developement-logo/Github/download (2).png'
import redux from '../../Asset/developement-logo/redux/download.png'
import Figma from '../../Asset/developement-logo/Figma/icons8-figma-48.png'
import Express from '../../Asset/developement-logo/ex/download (1).png'
import Firebase from '../../Asset/developement-logo/firebase/icons8-firebase-48.png'
import Mongo from '../../Asset/developement-logo/mongoose/icons8-mongodb-48.png'
import Vercel from '../../Asset/developement-logo/Vercel/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67.png'
import Netlify from '../../Asset/developement-logo/Netlify/download.png'
import postgresql from '../../Asset/developement-logo/postgresql/download.png'
import react from '../../Asset/developement-logo/react/download (1).png'


const Skills = () => {

    const skills = [
        {
            name: "HTML",
            img: html,
            level: "Advance"
        },
        {
            name: "CSS",
            img: css,
            level: "Advance"
        },
        {
            name: "Javascript",
            img: js,
            level: "Advance"
        },
        {
            name: "React",
            img: react,
            level: "Advance"
        },
        {
            name: "Redux",
            img: redux,
            level: "Moderate"
        },
        {
            name: "Postgre SQL",
            img: postgresql,
            level: "Moderate"
        },
        {
            name: "Bootstrap",
            img: Bootstrap,
            level: "Advance"
        },
        {
            name: "Tailwind CSS",
            img: Tailwind,
            level: "Advance"
        },

        {
            name: "Github",
            img: Github,
            level: "Moderate"
        },

        {
            name: "Figma",
            img: Figma,
            level: "Moderate"
        },

    ]

    const familier = [
        // {
        //     name: "Node js",
        //     img: Node,
        //     level: "Beginner"
        // },
        {
            name: "Express js",
            img: Express,
            level: "Beginner"
        },
        {
            name: "Firebase",
            img: Firebase,
            level: "Moderate"
        },
        {
            name: "Mongo DB",
            img: Mongo,
            level: "Beginner"
        },
        {
            name: "Netlify",
            img: Netlify,
            level: "Moderate"
        },
        {
            name: "Vercel",
            img: Vercel,
            level: "Moderate"
        },

    ]

    return (
        <section id="skill" className='container mx-auto mt-8 md:mt-20'>
            <div className="mb-[50px] sm:mb-[50px] flex flex-col items-start md:pl-10 mx-auto"
                data-aos="fade-right" data-aos-duration="1000"
                data-aos-easing="ease-in-cubic"
            >
                <h1 className="text-3xl md:text-[52px] font-semibold text-center my-8 text-white md:text-left md:leading-[4.25rem] w-full">Technologies <br className="hidden md:block" />I have expertise_ <FcEngineering className="inline-block text-4xl animate-pulse" /></h1>
                <p className="text-center md:text-left text-para text-lg  ">I know a lot of technologies &amp; Tools, but I have expertise in following</p>
            </div>


            <div className="mt-4 flex flex-wrap items-center justify-center gap-10 mx-auto expertise sm:gap-14  cursor-pointer">
                {
                    skills.map((skill, i) =>
                        <SkillBlob skill={skill} key={i} />
                    )
                }

            </div>
            <div className="mb-[50px] sm:mb-[50px] flex flex-col items-start md:pl-10 mx-auto">
                <h1 className="text-xl md:text-[52px] font-semibold text-center my-8 text-white md:text-left md:leading-[4.25rem] w-full"> <br className="hidden md:block" />Others technologies_  <FcEngineering className="inline-block text-4xl animate-pulse" /></h1>
                <p className="text-center md:text-left text-para text-lg  ">Tools, but I have less experience in following</p>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-10 mx-auto expertise sm:gap-14  cursor-pointer">
                {
                    familier.map((skill, i) =>
                        <SkillBlob skill={skill} key={i} />
                    )
                }

            </div>
        </section>
    );
};

export default Skills;