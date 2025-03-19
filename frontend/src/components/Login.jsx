import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>{
    const userInfo = {
      email: data.email,
      password: data.password,
    }
    await axios.post("/user/login", userInfo)
    .then((res)=>{
      console.log(res.data);
      if (res.data) {
        setInterval(() => {
          window.location.reload();
        }, 3000);
        toast.success('Login Successfull');        
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
      <div>
        <dialog id="login-model" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("login-model").close()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login!</h3>
              <div className="mt-4 space-y-2">
                <span className="Email">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none
                "
                  {...register("email", { required: true })}
                />{" "}
                <br />
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
                />{" "}
                <br />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    Password field is required⚠️
                  </span>
                )}
              </div>
              <div className="m-4 flex justify-between">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>

                <p>
                  Not registered?
                  <Link
                    to={"/signup"}
                    className="underline text-pink-500 cursor cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
