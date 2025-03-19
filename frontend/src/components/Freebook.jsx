import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
// import Book from "../../../backend/model/book_model.js";

function Freebook() {

  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=> {
      try {
        const res = await axios.get('/book')
        const freeData = res.data.filter((data) => data.Category === "Free");
        setBook(freeData)
        console.log(freeData);
      } catch (error) {
        console.log(error);
        
      }
    }
    getBook();
  },[]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            condimentum sed ipsum vel tristique. Maecenas vestibulum sapien vel
            mi varius, vel consequat massa laoreet?
          </p>
        </div>
        <div className="">
            <Slider className="" {...settings}>
                {book.map((item, index) => (
                    <Cards item={item} key={item.ID} />
                ))}
            </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
