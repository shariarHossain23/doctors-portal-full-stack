import React from "react";

const Review = ({ review }) => {
  const { reviews, img, name } = review;
  
  return (
    <div className="mx-auto">
      <div className="card  lg:max-w-lg bg-base-100 shadow-xl p-6">
        <div className="card-body">
          <p>{reviews}</p>
        </div>
        <div className="flex items-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={img} />
              </div>
            </div>
          <div>
              <h4>{name}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
