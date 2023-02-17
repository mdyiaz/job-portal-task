import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-center text-2xl text-sky-500'>_____Job Categories_____</h1>
            <h1 className='text-center text-5xl font-medium mt-3 mb-10'>Explore by Category</h1>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/qFDzRZy/fresher.png" alt="fresher" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                                Fresher Jobs
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                       
                        <div className="card-actions justify-end">
                             
                        <Link to="/fresher"><div className="btn btn-outline btn-info btn-sm text-white">See All</div></Link>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/2W7rR1D/experiance.png" alt="fresher" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Experienced Jobs
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                       
                        <div className="card-actions justify-end">
                             
                        <Link to="/experienced"><div className="btn btn-outline btn-info btn-sm text-white">See All</div></Link>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/4Wt2tKy/it.jpg" alt="fresher" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Top IT Companies 
                            <div className="badge badge-secondary">Best</div>
                        </h2>
                       
                        <div className="card-actions justify-end">
                             
                        <Link to="/itcompany"><div className="btn btn-outline btn-info btn-sm text-white">See All</div></Link>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default Categories;