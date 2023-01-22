import React from 'react';
import image1 from '../../photo/Screenshot (9).png'
import image2 from '../../photo/Screenshot (10).png'
import image3 from '../../photo/Screenshot (11).png'


const ProjectsCard = () => {
    return (
        <div >
            <h1 className='text-5xl text-white font-serif my-12  text-center uppercase border-4
             border-indigo-400 border-l-indigo-500 w-96 mx-auto
              border-b-indigo-500 py-3
             '>My  project </h1>

            {/* First project  */}
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6 '>
                <div className="card w-full h-80 bg-base-100 shadow-xl image-full">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div className="card-body px-12">

                        <h2 className="card-title uppercase text-white font-serif">Mobile planed</h2>
                        <p className='text-white font-serif'> <strong>DataBase:</strong> Mongodb
                            <p> <strong>Library:</strong> daisyUi and  tailwind </p>
                        </p>


                        <div className="card-actions justify-end">
                            <a className="
                            btn  bg-gradient-to-r from-primary to-secondary text-white
                            w-1/4  font-serif border-none
                            "

                                href='https://mobile-seller-ef181.web.app/' target="_blank">details</a>
                        </div>
                    </div>
                </div>


                {/* scend project */}
                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase text-white font-serif">adam bird</h2>
                        <p className='text-white font-serif'> <strong>DataBase:</strong> Mongodb

                            <p> <strong>Library:</strong> daisyUi and  tailwind </p>
                        </p>
                        <div className="card-actions justify-end">



                            <a className="
                            btn  bg-gradient-to-r from-primary to-secondary text-white
                            w-1/4  font-serif border-none
                            "

                                href='https://assignmests-11.web.app/' target="_blank">details</a>



                        </div>
                    </div>
                </div>


                {/* third project */}

                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title uppercase text-white font-serif">Doctors portal</h2>
                        <p className='text-white font-serif'> <strong>DataBase:</strong> Mongodb

                            <p> <strong>Library:</strong> daisyUi and  tailwind </p>
                        </p>
                        <div className="card-actions justify-end">



                            <a className="
                            btn  bg-gradient-to-r from-primary to-secondary text-white
                            w-1/4  font-serif border-none
                            "

                                href='https://doctors-protal-c7857.web.app/' target="_blank">details</a>



                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ProjectsCard;