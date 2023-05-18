import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <h1 className="text-3xl  uppercase text-center  md:text-[52px] font-semibold  my-6 text-white "
                data-aos="fade-right" data-aos-duration="900"
                data-aos-easing="ease-in-cubic"
            >Introducing my self_
                <img src="https://cdn-icons-png.flaticon.com/512/924/924915.png" alt="" className="inline-block mb-2 w-12 animate-pulse" />
            </h1>

            <div className='text-justify font-serif max-w-screen-xl lg:ml-24 sm:mx-3'
                data-aos="zoom-in-up" data-aos-duration="800"
                data-aos-easing="ease-in-out"
            >
                <h1 className='text-sky-400 bg-teal-accent-400 text-lg  '>I am pronoy banik  <span className="inline-block animate-wiggle text-xl ">&#128075;</span></h1>
                <p className='font-medium text-lg text-white'>
                    As a skilled developer, I meticulously crafted my resume to showcase my expertise and achievements in the world of coding. With a harmonious blend of technical skills, project experience, and a passion for innovation, my resume serves as a testament to my ability to transform complex problems into elegant solutions. Through a meticulous attention to detail, I have outlined my proficiency in various programming languages, frameworks, and tools, providing a comprehensive snapshot of my capabilities. Whether it's designing robust applications, optimizing code performance, or collaborating within agile teams, my resume stands as a testament to my commitment to excellence in software development
                </p>


            </div>

        </div>
    );
};

export default AboutMe;