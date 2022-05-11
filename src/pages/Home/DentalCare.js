import React from "react";
import img from "../../assets/images/treatment.png";
import Button from "../Shared/Button/Button";

const DentalCare = () => {
  return (
    <div className="mt-20">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row flex-1">
          <img  src={img} 
            className="lg:max-w-lg  rounded-lg shadow-2xl"
          />
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
