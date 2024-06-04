import React, { useEffect, useState } from "react";
import { auth, db } from "./Firebase";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import styles from './Profile.module.css'
import {Toaster} from 'react-hot-toast'
import avatar from '../assets/profile.png'


function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
      localStorage.removeItem("loggedin")
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div className='flex justify-center items-center h-screen container mx-auto'>
      {userDetails ? (
        <div className="title flex flex-col items-center ">
          <div className={styles.glass}> <h3 className="text-5xl font-bold mb-10">Welcome {userDetails.firstName} 🙏🙏</h3>
          <div >
            <p className="text-2xl title flex flex-col items-center">Email: {userDetails.email}</p>
            <p className="text-2xl title flex flex-col items-center">First Name: {userDetails.firstName}</p>
            <p className="text-2xl title flex flex-col items-center">Last Name: {userDetails.lastName}</p>
          </div>
          <div className={styles.button}>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-5" onClick={handleLogout}>
            Logout
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-5" onClick={()=>window.location.href="/compiler"}>
            Click to Code
          </button>
          </div>
          </div>

        </div>
      ) : (
        // <Navigate to={"/login"}/>
        <p className="flex justify-center h-screen text-4xl">Loading...Account might not registered</p>
      )}
    </div>
  );
}
export default Profile;
