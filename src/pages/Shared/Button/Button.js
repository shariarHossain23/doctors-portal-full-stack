import React from "react";

const Button = ({children}) => {
  return (
    <div>
      <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary uppercase">{children}</button>
    </div>
  );
};

export default Button;
