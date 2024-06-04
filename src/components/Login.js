import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import React, { useState } from "react";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import styles from './Login.module.css'
import avatar from '../assets/profile.png'
import {Link, useNavigate} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      // alert("User logged in Successfully");
      toast.success("User logged in Successfully", {
        position: "top-right",
        
      });
      localStorage.setItem("loggedin",true)
      navigate('/profile')
    } catch (error) {
      console.log(error.message);
      // alert(error.code);
      toast.error(error.code, {
        position: "top-right",
      });
    }
  };

  return (
    <div className="container mx-auto">

         {/* <Toaster position='top-center' reverseOrder={false}></Toaster> */}
   
         <div className='flex justify-center items-center h-screen'>
           <div className={styles.glass}>
   
             <div className="title flex flex-col items-center">
               <h4 className='text-4xl font-bold'>Hello Again!</h4>
               <span className='py-1 text-xl w-2/3 text-center text-gray-500'>
               </span>
             </div>
    <form onSubmit={handleSubmit}>
      <h3 className="flex justify-center items-center text-gray-500">Login</h3>
      <div className='profile flex justify-center py-4'>
                     <img src={avatar} className={styles.profile_img} alt="avatar" />
                 </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className=" flex justify-center ">
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        New user <Link to="/register">Register Here</Link>
      </p>
    </form>
    </div>
         </div>
       </div>
  );
}

export default Login;
