import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ItCompany = () => {


    const {data:categorys = [] } = useQuery({
        queryKey:['categorys'],
        queryFn: async () => {
          const res = await fetch('itcompany.json')
          const data = await res.json();
          return data;
    
        }
      })


    return (
        <div className='mt-10'>

            <h1 className='text-4xl mb-10 text-center'>_____Top IT Company_____</h1>

            {
                categorys.map(category => <div className="card lg:card-side bg-base-100 shadow-xl gap-10">
                <figure><img src={category.picture} alt="Album" className='w-[150px]'/></figure>
                <div className="card-body">
                  <h2 className="card-title">{category.company}</h2>
                  
                  <p>Location: {category.joblocation}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-warning text-white btn-sm">View Details</button>
                  </div>
                </div>
              </div>)
            }
            
        </div>
    );
};

export default ItCompany;