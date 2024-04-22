import { useState, useEffect } from "react";
import { Link, useParams, ScrollRestoration } from "react-router-dom";
import { usePlaces } from "../../hooks/usePlaces";
import { Details } from "../../components/Details/Details";
import { NearbyPlaces } from "../../components/NearbyPlaces/NearbyPlaces";
import { Loading } from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";
import { Card } from "../../components/Card/Card";
import { IoIosArrowDown } from "react-icons/io";
import { GoChevronLeft } from "react-icons/go";

export const Place = () => {
  const { slug } = useParams();

  const { getPlace, getPlaces, isLoading, isError } = usePlaces();

  const [place, setPlace] = useState();
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  useEffect(() => {
    const fetchPlace = async () => {
      const place = await getPlace(slug);
      setPlace(place);
      const places = await getPlaces();
      setNearbyPlaces(
        places.filter(
          (item) =>
            (item.borough !== undefined) &
            (item.title !== place.title) &
            (item.borough === place.borough)
        )
      );
    };

    fetchPlace();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="place">
      <Link
        to="/places"
        className="back-btn"
      >
        <GoChevronLeft /> Back
      </Link>
      <ScrollRestoration />
      <Details data={place} />
      {place.events?.length > 0 && (
        <div className="place-events">
          <div className="place-events-title">
            Events at {place.title}
            <IoIosArrowDown />
          </div>
          <div className="events-list">
            {place.events?.map((event) => {
              return (
                <Card
                  key={event.id}
                  url={`/events/${event.fields.url}`}
                  image={event.fields.mainImage.fields.file.url}
                  title={event.fields.title}
                  subtitle={event.fields.subtitle}
                />
              );
            })}
          </div>
        </div>
      )}
      {nearbyPlaces.length > 0 && <NearbyPlaces nearbyPlaces={nearbyPlaces} />}
    </section>
  );
};
