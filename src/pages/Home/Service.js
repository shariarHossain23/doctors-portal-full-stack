import React from "react";

const Service = ({service}) => {
    const {img,title,desc} = service
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-4 mx-auto">
        <figure className="px-2 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
