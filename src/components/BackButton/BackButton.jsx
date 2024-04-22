/* eslint-disable react/prop-types */
import { Link, ScrollRestoration } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";

export const BackButton = ({ url }) => {
  return (
    <>
      <Link to={`/${url}`} className="back-btn">
        <GoChevronLeft /> Back
      </Link>
      <ScrollRestoration />
    </>
  );
};
