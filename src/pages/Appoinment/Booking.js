import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Booking = ({ treatments,setTretment, date }) => {
  const [user, loading, error] = useAuthState(auth);
  const { name, slots } = treatments;
  const handleSubmit = event => {
      event.preventDefault()
      const slot = event.target.slot.value
      setTretment(null)
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal"className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
           className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">Booking for:{name || ""}</h3>
          <form onSubmit={handleSubmit} className="grid col-span-1 gap-3 mt-2 justify-center">
            <input
              type="text"
              value={format(date, "PP")}
             className="input input-bordered w-full max-w-xs"
              disabled
            />
            <select name="slot"className="select select-bordered w-full max-w-xs">
              {slots.map((slot,index) => (
                <option
                key={index}
                value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              disabled
              value={user?.displayName || ""}
             className="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              disabled
              value={user?.email || ""}
             className="input input-bordered w-full max-w-xs"
            />
            <input
              name="number"
              type="number"
              placeholder="phone number"
             className="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              placeholder="Type here"
             className="btn btn-secondary w-full max-w-xs text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
