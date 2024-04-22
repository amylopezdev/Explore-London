import { useState } from "react";
import { createClient } from "contentful";
import { CONTENTFULINFO } from "../constants";

const client = createClient(CONTENTFULINFO);

export const usePlaces = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPlace = async (id) => {
    try {
      setIsLoading(true);
      const response = await client.getEntries({
        content_type: "place",
        "fields.url": id,
      });
      return parseData(response.items[0]);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getPlaces = async () => {
    try {
      setIsLoading(true);
      const response = await client.getEntries({ content_type: "place" });
      return response.items.map(parseData);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const parseData = (item) => {
    const { id } = item.sys;
    const {
      title,
      subtitle,
      category,
      description,
      hasFreeEntry,
      mainImage,
      location,
      borough,
      closestTubeStations,
      url,
      website,
      keywords,
      events
    } = item.fields;
    return {
      id,
      title,
      subtitle,
      category,
      description,
      hasFreeEntry,
      mainImage,
      location,
      borough,
      closestTubeStations,
      url,
      website,
      keywords,
      events
    };
  };

  return { getPlace, getPlaces, isLoading, isError };
};
