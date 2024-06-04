import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from './components/Profile'
import { auth } from "./components/Firebase";
import { useEffect,useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user)
    });
  });
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<LandingPage/>}></Route> */}
      <Route
                path="/"
                element={user ? <Navigate to="/profile" /> : <LoginPage />}
        />
      <Route path="/register" element={<RegisterPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/compiler" element={<LandingPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
