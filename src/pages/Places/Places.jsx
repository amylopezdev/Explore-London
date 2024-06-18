import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlaces } from "../../hooks/usePlaces";
import { CategorySelect } from "../../components/CategorySelect/CategorySelect";
import { FreeEntryToggler } from "../../components/FreeEntryToggler/FreeEntryToggler";
import { Card } from "../../components/Card/Card";
import { Loading } from "../../components/Loading/Loading";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import "./Places.css";

export const Places = () => {
  const { category = "all" } = useParams();

  const { getPlaces, isLoading, isError } = usePlaces();

  const [newPlaces, setNewPlaces] = useState([]);
  const [showOnlyFree, setShowOnlyFree] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const places = await getPlaces();

      setNewPlaces(
        places
          .filter((place) => {
            if (category === "all") {
              return true;
            }
            return place.category.includes(category);
          })
          .filter((place) => {
            if (!showOnlyFree) {
              return true;
            }
            return place.hasFreeEntry === true;
          })
      );
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, showOnlyFree]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <section className="places">
      <div className="places-filter">
        <CategorySelect selectedCategory={category} />
        <FreeEntryToggler
          category="places"
          showOnlyFree={showOnlyFree}
          setShowOnlyFree={setShowOnlyFree}
        />
      </div>
      <div>
        <h1 className="places-title">
          {category === "all"
            ? "All Places"
            : category.replaceAll("-and-", " & ")}
        </h1>
        <div className="results-number">{newPlaces.length} Results</div>
      </div>
      <div className="places-list">
        {newPlaces.map((place) => {
          return (
            <Card
              key={place.id}
              url={`/${place.url}`}
              image={place.mainImage.fields.file.url}
              title={place.title}
              subtitle={place.subtitle}
            />
          );
        })}
      </div>
    </section>
  );
};