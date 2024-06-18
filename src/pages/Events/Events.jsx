import { useState, useEffect } from "react";
import { useEvents } from "../../hooks/useEvents";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { FreeEntryToggler } from "../../components/FreeEntryToggler/FreeEntryToggler";

export const Events = () => {
  const { getEvents, isLoading, isError } = useEvents();

  const [newEvents, setNewEvents] = useState([]);
  const [showOnlyFree, setShowOnlyFree] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const events = await getEvents();
      setNewEvents(
        events.filter((place) => {
          if (!showOnlyFree) {
            return true;
          }
          return place.hasFreeEntry === true;
        })
      );
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showOnlyFree]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="events">
      <div className="events-filter">
        <FreeEntryToggler
          category="events"
          showOnlyFree={showOnlyFree}
          setShowOnlyFree={setShowOnlyFree}
        />
      </div>
      <h1 className="events-title">Events</h1>
      <div className="results-number">{newEvents.length} Results</div>
      <div className="events-list">
        {newEvents.map((event) => {
          return (
            <Card
              key={event.id}
              url={`/events/${event.url}`}
              image={event.mainImage.fields.file.url}
              title={event.title}
              subtitle={event.subtitle}
            />
          );
        })}
      </div>
    </section>
  );
};