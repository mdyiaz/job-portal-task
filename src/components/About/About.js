import React from 'react';
import img from '../../assest/about-us-page.png';

const About = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-5xl text'>About Job Portal</h1>


            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-10 gap-10'>

                <div>
                    <p className='text-lg'>Indeed is the #1 job site in the world1 with over 300M unique visitors every month2. Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. Every day, we connect millions of people to new opportunities.

Please note that Indeed and its affiliates are directly or indirectly owned by a publicly traded Japanese parent company</p>
                </div>

                <div>
                    <img src={img} alt="" className='rounded-2xl'/>
                </div>

            </div>
        </div>
    );
};

export default About;