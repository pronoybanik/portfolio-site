import React from 'react';

const ProjectsCard = () => {
    return (
        <div >
            <h1 className='text-5xl text-white font-serif my-12  text-center'>My project </h1>
            <div className='flex gap-10 '>
                <div className="card w-full h-80 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="
                            btn  bg-gradient-to-r from-primary to-secondary text-white
                            w-1/4  font-serif 
                            ">Details</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl image-full">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="
                            btn  bg-gradient-to-r from-primary to-secondary text-white
                            w-1/4  font-serif 
                            ">Details</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectsCard;