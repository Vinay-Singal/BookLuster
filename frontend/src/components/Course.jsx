import React, { useState } from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
// import Book from "../../../backend/controller/book_controller.js";


function Course() {
  const [Book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=> {
      try {
        const res = await axios.get('/book')
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam!. Integer condimentum sed ipsum vel tristique.
            Maecenas vestibulum sapien vel mi varius, vel consequat massa
            laoreet? Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam!.
          </p>
          <Link to={"/"}>
          <button className="btn btn-secondary mt-6">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {Book.map((item) => (
            <Cards key={item.ID} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
