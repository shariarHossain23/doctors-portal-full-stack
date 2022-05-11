import React from "react";

const InfoCard = ({img,bgClass,cardTitle,cardBody}) => {
  return (
    <div>
      <div className={`card lg:max-w-lg  lg:card-side  shadow-xl ${bgClass}`}>
        <figure className="pl-5 sm:text-center mt-4">
          <img
            style={{width:"48px"}}
            src={img}
            alt="Album"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{cardBody}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
