import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEvents } from "../../hooks/useEvents";
import { Details } from "../../components/Details/Details";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { BackButton } from "../../components/BackButton/BackButton";
import { Card } from "../../components/Card/Card";

export const Event = () => {
  const { slug } = useParams();

  const { getEvent, isLoading, isError } = useEvents();

  const [event, setEvent] = useState();

  useEffect(() => {
    const fetchEvent = async () => {
      const event = await getEvent(slug);
      setEvent(event);
    };

    fetchEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="event">
      <BackButton url="events" />
      <Details data={event} />
      {event.place && (
        <div className="place-events">
          <div className="place-events-title">
            Takes place at {event.place.fields.title}
          </div>
          <div className="events-list">
            <Card
              key={event.place.fields.title}
              url={`/${event.place.fields.url}`}
              image={event.place.fields.mainImage.fields.file.url}
              title={event.place.fields.title}
              subtitle={event.place.fields.subtitle}
            />
          </div>
        </div>
      )}
    </section>
  );
};
