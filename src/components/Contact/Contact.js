import React from 'react';
import img from '../../assest/contact.jpg'
import {BiSend} from 'react-icons/bi';


const Contact = () => {


    const sendEmail = data => {

    }
    return (
        <div className='mt-10'>
            <h1 className='text-5xl'>Contact Information</h1>
           
           <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-7 text-lg'>
                <p> Job Portal-HQ <br/> Address: Rayerbag, Dhaka-1236.</p>
                <p>Phone:+8801631375174</p>
                <p>Email:mdriazulislaam@gmail.com</p>
           </div>


           <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-10 gap-5'>
                <div>
                        <img src={img} alt="" className='rounded-2xl'/>
                </div>



                <div>
                        <h1 className='text-4xl font-bold text-yellow-400 mb-5'>Send Message</h1>

                    <form onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered input-warning w-5/6  mb-5 text-black" />

                         <input type="text" name='email' placeholder="Enter Your Email" className="input input-bordered input-warning w-5/6 mb-5 text-black" />

                        <input type="text" name='subject' placeholder="Enter Your Subject" className="input input-bordered input-warning w-5/6  mb-5 text-black" /> <br />


                        <textarea className="textarea textarea-warning w-5/6 h-40 text-black" name='message' placeholder="Enter Your Message"></textarea> <br />


                        <button type='submit' className="btn btn-warning mt-3 mb-10 text-white">Submit <span className='pl-2'><BiSend size='20px'/></span></button>

                    </form>

                   

                </div>
           </div>
        </div>
    );
};

export default Contact;