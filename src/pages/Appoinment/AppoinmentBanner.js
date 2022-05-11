import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import img from '../../assets/images/chair.png';

const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div class="md:flex items-center justify-center flex-row-reverse gap-6 mt-28 mb-16">
      <div className="">
      <img src={img} className='max-w-sm w-[100%]' alt="" />
      </div>
      <div className="sm:ml-[-19px]">
        <DayPicker 
             mode="single"
             selected={date}
             onSelect={setDate}
        />
      </div>
    </div>
  );
};

export default AppoinmentBanner;
