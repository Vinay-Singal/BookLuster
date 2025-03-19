import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.Image} alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.Name}
              <div className="badge badge-secondary">{item.Category}</div>
            </h2>
            <p>{item.Title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.Price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
