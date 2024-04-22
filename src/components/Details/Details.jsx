/* eslint-disable react/prop-types */
import "./Details.css";

export const Details = ({ data }) => {
  const { title, subtitle, description, closestTubeStations, website } = data;
  const { url } = data.mainImage.fields.file;

  return (
    <div className="place-details">
      <img src={url} alt={title} />
      <div className="place-info">
        <div className="place-titles">
          <h2 className="place-title">{title}</h2>
          <div className="place-subtitle">{subtitle}</div>
        </div>
        <p className="place-description">{description}</p>
        <div className="place-stations">
          <h4>
            {closestTubeStations &&
              `Closest Tube Station${
                closestTubeStations.length > 1 ? "s" : ""
              }:`}
          </h4>
          <ul>
            {closestTubeStations &&
              closestTubeStations.map((station) => (
                <li key={station}>{station}</li>
              ))}
          </ul>
        </div>
        <div className="place-website">
          <h4>{website && "More info: "}</h4>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}ʼs website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;