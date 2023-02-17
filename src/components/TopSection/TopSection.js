import React from 'react';

const TopSection = () => {
    return (
        <div>
            <h1 className='text-center mt-10 text-3xl font-bold'>Welcome to <span className='text-orange-500 font-extrabold'>Job Portal</span> <br/>
                                                                We're so glad you're here.</h1>
            <p className='mt-5 text-center text-lg'>Which best describes you today?</p>


           <div className='grid lg:grid-cols-3 sm:grid-cols-1 '>
        
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/wQ0HKr6/icons8-employees-50.png" alt="employee pic" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Employed</h2>
                </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/Y83gnKh/icons8-employer-64.png" alt="not employee pic" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Not Employed</h2>
                </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/hX1drRm/icons8-student-64.png" alt="Students pic" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Student</h2>
                </div>
                </div>
           </div>
        </div>
    );
};

export default TopSection;