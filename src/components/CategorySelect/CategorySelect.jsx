/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./CategorySelect.css";

export const CategorySelect = ({ selectedCategory }) => {
  const navigate = useNavigate();

  const categories = [
    "all",
    "landmarks",
    "nature",
    "shopping",
    "food-and-drink",
    "art-and-museums",
  ];

  return (
    <div className="category-select">
      <label htmlFor="category-select">Category:</label>
      <select
        name="category"
        id="category-select"
        value={selectedCategory}
        onChange={(e) => {
          navigate(`/places/${e.target.value}`);
        }}
      >
        {categories.map((category) => {
          return (
            <option key={category} value={category} className="category-btn">
              {category
                .replace("-and-", " & ")
                .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase()
                )}
            </option>
          );
        })}
      </select>
    </div>
  );
};
