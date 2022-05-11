import React from "react";

const DentalService = ({ service, setTretment }) => {
  const { name, slots } = service;
  return (
    <div className="mt-4">
      <div className="card lg:max-lg:lg bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="card-title text-secondary">{name}</h2>
          <p>
            {slots.length ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-600">Try another day</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div className="card-actions justify-center ">
            <label
              htmlFor="booking-modal"
              onClick={() => setTretment(service)}
              disabled={slots.length === 0}
             className="btn btn-secondary uppercase text-white w-48 mt-3"
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalService;
