import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import Navbar from "./Navbar";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    // console.log(data);
    
    const userInfo={
      Name:data.name,
      Email_ID:data.email,
      Message:data.message
    }
    try {
      await axios.post("https://getform.io/f/aollwdyb", userInfo);
    //   // function notify(){
      toast(`Hey ${userInfo.Name}, your message was sent successfully! 🚀 I’m on it like a superhero 🦸‍♂️—expect a reply soon! 😊`);

    //   // }
    //   reset()
      // alert("we are revert back")
    } catch (error) {
      toast(`Oops, ${userInfo.Name}! 😅 Looks like your message got lost in the digital universe 🌌. Don’t worry, I’m on it! 🔧 Try again later ⏳, and I’ll be back with a response faster than a Wi-Fi signal! 📡`);

      // console.log(error);
      
    }
  };

  return (
    <>
    <Navbar/>
      <div
        name="Contact"
        className="max-w-screen-xl container mx-auto px-4 md:px-20 md:my-20"
      >
        <div className="">
          <h1 className="text-3xl font-semibold text-gray-900">
            Let's Work Together
          </h1>
          <p className="text-gray-600 mt-2">
            I would love to hear from you. Whether you have a question,
            feedback, or simply want to get in touch, feel free to reach out.
          </p>
          <div className="min-h-screen flex items-center justify-center md:mt-[-50px] md:mb-[-50px] my-[-90px]">
            <div className="flex flex-col bg-gray-300 w-full max-w-sm shadow-lg rounded-lg p-6 ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                // method="Post"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 font-semibold">
                    This field is required
                  </span>
                )}

                <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email address✉"
                  className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 font-semibold">
                    This field is required
                  </span>
                )}

                <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Write your message here💬"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
                  name="message"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 font-semibold">
                    This field is required
                  </span>
                )}

                <button
                  type="submit"
                  className="w-full mt-6 py-2 bg-blue-500 text-white text-2xl rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  // onClick={notify}➤
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Contact;
