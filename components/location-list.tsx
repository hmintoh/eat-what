import React, { useState, useEffect } from "react";
import { TZones } from "@/utils/types";

import PillBar from "@/components/pill-bar";

import {
  LocationListWrapper,
  ListContainer,
} from "@/styles/location-list.styles";

interface LocationListProps {
  locations: any[];
}

const LocationList = ({ locations }: LocationListProps): JSX.Element => {
  const [activeZone, setActiveZone] = useState<TZones | undefined>(undefined);
  const [filteredLocations, setFilteredLocations] = useState<any[]>(locations);

  useEffect(() => {
    if (activeZone !== undefined) {
      const filters = [];
      activeZone !== undefined && filters.push(activeZone);
      getFilteredLocations(filters);
    }
  }, [activeZone]);

  const getFilteredLocations = (filters: string[]): void => {
    const filtered = locations.filter((location) =>
      location.properties.zones.multi_select.some((zone) =>
        filters.includes(zone.name)
      )
    );
    setFilteredLocations(filtered);
  };

  return (
    <LocationListWrapper>
      <PillBar
        labels={["central", "north", "south", "east", "west"]}
        setActive={(label) => setActiveZone(label)}
      />

      <ListContainer>
        {filteredLocations.map((location, i) => (
          <span key={i}>
            {i + 1} - {location.properties.name.title[0].plain_text}
          </span>
        ))}
      </ListContainer>
    </LocationListWrapper>
  );
};

export default LocationList;
