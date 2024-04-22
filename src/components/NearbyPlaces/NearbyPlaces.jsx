/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import { Card } from "../../components/Card/Card";
import "./NearbyPlaces.css";

export const NearbyPlaces = ({ nearbyPlaces }) => {
  return (
    <div className="nearby-places">
      <div className="nearby-places-title">
        Nearby Places<IoIosArrowDown />
      </div>
      <div className="places-list">
        {nearbyPlaces.map((place) => {
          return (
            <Card
              key={place.id}
              url={`/${place.url}`}
              image={place.mainImage.fields.file.url}
              title={place.title}
              subtitle={place.subtitle}
              category="places"
            />
          );
        })}
      </div>
    </div>
  );
};
