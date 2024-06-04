import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import React, { useState } from "react";
import { auth, db } from "./Firebase";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { toast } from "react-toastify";
import styles from './Register.module.css';
import {Link } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const usercredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = usercredentials.user;
      console.log(user);

      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname
      });
      
      console.log("User Registered Successfully!!");
      alert("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",      });
    } catch (error) {
      console.log(error.message);
      alert(error.message)
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="container mx-auto">

         {/* <Toaster position='top-center' reverseOrder={false}></Toaster> */}
   
         <div className='flex justify-center items-center h-screen'>
           <div className={styles.glass}>
   
             <div className="title flex flex-col items-center">
               <h4 className='text-5xl font-bold'>Connect with us</h4>
               {/* <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                 Explore Us
               </span> */}
             </div>
    <form onSubmit={handleRegister}>
      <h3 className="flex justify-center items-center ">Sign Up</h3>

      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => setLname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-center">
        <button type="submit" className={styles.btn}>
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">Login</Link>
      </p>
    </form>
    </div>
         </div>
       </div>
  );
}
export default Register;
