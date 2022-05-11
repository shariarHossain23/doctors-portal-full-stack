import { format } from "date-fns";
import React from "react";

const Booking = ({ treatments,setTretment, date }) => {
  const { name, slots } = treatments;
  const handleSubmit = event => {
      event.preventDefault()
      const slot = event.target.slot.value
      setTretment(null)
      console.log(slot);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking for:{name}</h3>
          <form onSubmit={handleSubmit} className="grid col-span-1 gap-3 mt-2 justify-center">
            <input
              type="text"
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
              readOnly
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              name="number"
              type="number"
              placeholder="phone number"
              class="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              placeholder="Type here"
              class="btn btn-secondary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
