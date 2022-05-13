import React from "react";
import footer from "../../../assets/images/footer.png";

const Fotter = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section
      className="mt-20 p-10"
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
    >
      <footer className="footer   text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <div className="text-center mt-16">
        <p>Copyright © {year} - All right reserved by shariar</p>
      </div>
    </section>
  );
};

export default Fotter;
