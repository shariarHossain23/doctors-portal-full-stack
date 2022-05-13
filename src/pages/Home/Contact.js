import React from "react";
import appoitment from '../../assets/images/appointment.png';

const Contact = () => {
  return (
    <section
    style={{background:`url(${appoitment})`,padding: "35px"}}
    className="mt-16 sm:p-10 lg:p-20"
    >
      <div>
        <h3 className="text-center text-primary text-xl font-bold mb-4">
          Contact Us
        </h3>
        <h2 className="text-center text-white lg:text-4xl">Stay connected with us</h2>

        <div className="text-center mt-6">
          <form action="#">
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered input-sm w-full max-w-xs mb-4"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-sm w-full max-w-xs mb-4"
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Your message"
              className="input input-bordered input-lg w-full max-w-xs mb-4"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
