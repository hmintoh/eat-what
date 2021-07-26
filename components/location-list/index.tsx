import React from "react";
import styles from "@/components/location-list/styles.module.css";

interface LocationListProps {
  locations: any[];
}

const LocationList = ({ locations }: LocationListProps): JSX.Element => {
  return (
    <>
      {locations.map((location, i) => (
        <div key={i} className={styles.card}>
          <h2>{location.properties.name.title[0].plain_text}</h2>
          <p>
            meals -{" "}
            {location.properties.meals.multi_select.map((meal) => meal.name)}
          </p>
          <p>
            zones -{" "}
            {location.properties.zones.multi_select.map((zone) => zone.name)}
          </p>
        </div>
      ))}
    </>
  );
};

export default LocationList;
