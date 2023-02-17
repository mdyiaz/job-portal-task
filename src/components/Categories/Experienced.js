import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Experienced = () => {


    const {data:categorys = [] } = useQuery({
        queryKey:['categorys'],
        queryFn: async () => {
          const res = await fetch('experianced.json')
          const data = await res.json();
          return data;
    
        }
      })


    return (
        <div className='mt-10'>

            <h1 className='text-4xl mb-10 text-center'>_____Experienced Job_____</h1>

            {
                categorys.map(category => <div className="card lg:card-side bg-base-100 shadow-xl gap-10">
                <figure><img src={category.picture} alt="Album" className='w-[150px]'/></figure>
                <div className="card-body">
                  <h2 className="card-title">{category.position}</h2>
                  <p>Company Name: {category.company}</p>
                  <p>Location: {category.joblocation}</p>
                  <div className="card-actions justify-end">
                    <Link to="/applynow"><button className="btn btn-warning text-white btn-sm">Apply Now</button></Link>
                  </div>
                </div>
              </div>)
            }
            
        </div>
    );
};

export default Experienced;