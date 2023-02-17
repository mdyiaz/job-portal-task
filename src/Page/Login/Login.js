import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assest/login.jpg';
import { AuthContext } from '../../Contexts/Authprovider';

const Login = () => {


    const {register, handleSubmit, formState: {errors} } = useForm();

    const [loginError, setLoginError] = useState('');

    const {signIn} = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();



    const from = location.state?.from?.pathname || '/';





    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate(from, {replace: true});
        })
        .catch(error => {
          
          console.error(error)
          setLoginError(error.message)
        })
    }
   



    return (
        <div className="hero w-full mb-10">
        <div className="hero-content grid md:grid-cols-2 flex-col gap-20 lg:flex-row">
          <div className="text-center lg:text-left">
           

            <img className='' src={loginImg} alt="" />


          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login now !</h1>


<div className='px-8 py-12'>

<form onSubmit={handleSubmit(handleLogin)}>
      



      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
 
  <input type="email" {...register("email", {required: "Email address is required"})} placeholder="Enter email" className="input input-bordered w-full max-w-xs" />
  {errors.email && <p className='text-red-500' role="alert"> {errors.email?.message}</p>}
</div>



<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
 
  <input type="password" {...register("password", {required: "Password is required",
  minLength: { value: 6, message: "password must be 6 characters long" }
})} placeholder="Enter email" className="input input-bordered w-full max-w-xs" />
  {errors.password && <p className='text-red-500' role="alert"> {errors.password?.message}</p>}
  <label className="label">
    <span className="label-text">Forget Password</span>
  </label>
</div>


     
     
      
<button className="btn btn-active btn-primary w-full text-white" type='submit'>Login !</button>

<div>
  {loginError && <p className='text-red-500'>{loginError}</p>}
</div>

    </form>


</div>



            <p className=' text-sm text-center mb-5'>Dont have an Account ? <Link to ="/register" className='text-orange-600 font-semibold'> Sign Up</Link></p>

            


            
           

          </div>
        </div>
      </div>
    );
};

export default Login;