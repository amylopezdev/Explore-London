/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const Hero = ({ category, image, title }) => {
  return (
    <div className="hero">
      <Link to={`/places/${category}`}>
        <img src={image} alt="" />
        <h2 className="category-title">{title}</h2>
        <div className="overlay" />
      </Link>
    </div>
  );
};
