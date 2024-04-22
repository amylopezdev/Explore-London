/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ url, image, title, subtitle }) => {
  return (
    <Link to={`${url}`}>
      <div className="card">
        <img src={image} alt="" />
        <div className="card-title">
          <h3>{title}</h3>
          <div className="subtitle">{subtitle}</div>
        </div>
        <div className="overlay"></div>
      </div>
    </Link>
  );
};
