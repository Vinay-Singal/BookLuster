import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, Navigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>{
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    await axios.post("/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data);
      if (res.data) {
        toast.success('Signup Successfull');
        window.location.replace("/");
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    }).catch((err)=>{
      if (err.response) {
        console.log(err);
        toast.error("Error:"+ err.response.data.message);
        
      }
      
    })
  }

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="md:w-1/2 w-full">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp!</h3>
              <div className="mt-4 space-y-2">
                <span className="Name">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your FullName"
                  className="w-80 px-3 py-1 border rounded-md outline-none
                "
                  {...register("fullname", { required: true })}
                /> <br />
                {errors.fullname && (
                  <span className="text-red-500 text-sm">
                    Name field is required⚠️
                  </span>
                )}
                <br />
                <span className="Email">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none
                "
                  {...register("email", { required: true })}
                /> <br />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Email field is required⚠️
                  </span>
                )}
                <br />
                <span className="password">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none
                "
                  {...register("password", { required: true })}
                /> <br />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    Password field is required⚠️
                  </span>
                )}
              </div>
              <div className="m-4 flex justify-between">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p>
                  Have you Account?
                  <button
                    className="underline text-pink-500 cursor cursor-pointer"
                    onClick={() =>
                      document.getElementById(`login-model`).show()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
