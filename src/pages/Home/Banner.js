import React from "react";
import banner from '../../assets/images/chair.png';
import Button from "../Shared/Button/Button";

const Banner = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
         
            className="lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
            Treatment involves the combined team effort of surgical, medical & radiation oncologists. Personalised lip & oral cancer treatment that ensures an optimal outcome for the patients.
            </p>
            <Button>Get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
