import React from "react";

import {
  CardContainer,
  CardTitle,
  PillContainer,
} from "@/styles/location-list.styles";

interface LocationListProps {
  locations: any[];
}

const LocationList = ({ locations }: LocationListProps): JSX.Element => {
  return (
    <>
      {locations.map((location, i) => (
        <CardContainer key={i}>
          <CardTitle>{location.properties.name.title[0].plain_text}</CardTitle>

          <PillContainer>
            {location.properties.meals.multi_select.map((meal, i) => (
              <span key={i}>{meal.name}</span>
            ))}
          </PillContainer>

          <PillContainer>
            {location.properties.zones.multi_select.map((zone, i) => (
              <span key={i}>{zone.name}</span>
            ))}
          </PillContainer>
        </CardContainer>
      ))}
    </>
  );
};

export default LocationList;
