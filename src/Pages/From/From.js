import axios from 'axios';
import React, { useState } from 'react';

const From = () => {

    const [thumbImage, setThumbImage] = useState('')

    const imageHostKey = process.env.REACT_APP_imagebb;
    // console.log(imageHostKey);

    const handleThumbImage = event => {
        setThumbImage(event.target.files[0])
        console.log(event.target.files[0]);
    }

    // console.log(thumbImage);


    const handleSubmit = event => {
        event.preventDefault()
        // console.log(event.target.files);
        const form = event.target;
        const websiteTitle = form.websiteTitle.value
        const domain = form.domain.value;
        const database = form.database.value;
        const Security = form.security.value;
        const apiList = form.apiList.value;
        const host = form.host.value;
        const technology = form.technology.value
        const reactHook = form.reactHook.value;
        const library = form.library.value;
        const about = form.about.value;
        const nodejs = form.nodejs.value;
        const frontendLibrary = form.frontendLibrary.value;
        const backendLibrary = form.backendLibrary.value;
        const frontendFramework = form.frontendFramework.value;
        const backendFramework = form.backendFramework.value;
        const Framework = form.Framework.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const language = form.language.value;
        // const thumbImage = form.thumbImage.value;
        // const coverImage = form.coverImage.value;

        // console.log(thumbImage, coverImage);

        // console.log(websiteTitle,
        //     domain,
        //     database,
        //     Security,
        //     apiList,
        //     host,
        //     technology,
        //     reactHook,
        //     library,
        //     about,
        //     nodejs,
        //     frontendLibrary,
        //     backendLibrary,
        //     frontendFramework,
        //     backendFramework,
        //     Framework,
        //     shortDescription,
        //     longDescription,
        //     language);


        const portfolioProject = {
            websiteTitle,
            domain,
            database,
            Security,
            apiList,
            host,
            technology,
            reactHook,
            library,
            about,
            nodejs,
            frontendLibrary,
            backendLibrary,
            frontendFramework,
            backendFramework,
            Framework,

            shortDescription,
            longDescription,
            language,
            thumbImage,
            // coverImage

        }

        console.log(portfolioProject);


        // const thumbImage = event.target.thumbImage.value;
        // const coverImage = event.target.coverImage.value;
        // console.log('image', thumbImage, coverImage);

        // const images = thumbImage[0]

        const formData = new FormData();
        formData.append('images', thumbImage);

        // https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY

        const url = `https://api.imgbb.com/1/upload?expiration=10000&key=99f58a547dc4b1d269148eb1b605ef29`
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
            });

        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgRes => {
        //         if (imgRes.success) {
        //             console.log('done');
        //         }
        //     })

        // console.log(portfolioProject)




        // fetch('http://localhost:5000/projectData', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(portfolioProject)

        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.insertedId) { 
        //             alert('data store by database')

        //         }

        //     })



    }

    return (
        <section>


            <form onSubmit={handleSubmit} >
                <div className='grid grid-cols-2 gap-5 w-10/12 mx-auto mt-20 mb-10'>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white  ">Website Title</span>
                            </label>
                            <input name='websiteTitle' type="text" placeholder="Website Title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Domain</span>
                            </label>
                            <input name='domain' type="text" placeholder="Domain" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Database</span>
                            </label>
                            <input name='database' type="text" placeholder="Database" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Security</span>
                            </label>
                            <input name='security' type="text" placeholder="Security" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">API List</span>
                            </label>
                            <input name='apiList' type="text" placeholder="Api List" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Host</span>
                            </label>
                            <input name='host' type="text" placeholder="Host" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Technology</span>
                            </label>
                            <input name='technology' type="text" placeholder="Technology" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">React Hook</span>
                            </label>
                            <input name='reactHook' type="text" placeholder="React Hook" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Library</span>
                            </label>
                            <input name='library' type="text" placeholder="Library" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">About</span>
                            </label>
                            <input name='about' type="text" placeholder="About" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Node Js</span>
                            </label>
                            <input name='nodejs' type="text" placeholder="Node js" className="input input-bordered" />
                        </div>

                    </div>


                    <div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">BackEnd Library</span>
                            </label>
                            <input name='frontendLibrary' type="text" placeholder="BackEnd-Library" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">BackEnd Library</span>
                            </label>
                            <input name='backendLibrary' type="text" placeholder="BackEnd-Library" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">FrondEnd Framework</span>
                            </label>
                            <input name='frontendFramework' type="text" placeholder="FrondENd Framework" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">BackEnd Framework</span>
                            </label>
                            <input name='backendFramework' type="text" placeholder="FrondENd Framework" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Framework</span>
                            </label>
                            <input name='Framework' type="text" placeholder="FrondENd Framework" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Short Description</span>
                            </label>
                            <input name='shortDescription' type="text" placeholder="Short Descripition" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Long Descripition</span>
                            </label>
                            <input name='longDescription' type="text" placeholder="Long Descripition" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-white">Language</span>
                            </label>
                            <input name='language' type="text" placeholder="Language" className="input input-bordered" />
                        </div>

                        <div >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-white">Thumb Image</span>
                                </label>
                                <input onChange={handleThumbImage} name='thumbImage' type="file" placeholder="Language" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg text-white">Cover Image</span>
                                </label>
                                <input name='coverImage' type="file" placeholder="Language" className="input input-bordered" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card-actions justify-center ">
                    <button className="btn btn-primary w-1/2 uppercase ">submit</button>
                </div>
            </form>

        </section>
    );
};

export default From;