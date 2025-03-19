import React from "react";
import Home from "./components/Home";
import Courses from "./components/courses/Courses";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast';
import { userAuth } from "./context/AuthProvider";
import Contact from "./components/Contact";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  const [authUser, setAuthUser] = userAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to={"/signup"}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
