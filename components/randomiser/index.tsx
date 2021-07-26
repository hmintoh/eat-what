import React, { useState } from "react";
import styles from "@/components/randomiser/styles.module.css";

interface RandomiserProps {
  locations: any[];
}

const Randomiser = ({ locations }: RandomiserProps): JSX.Element => {
  const [random, setRandom] = useState(undefined);

  const locationNames = locations.map(
    (loc) => loc.properties.name.title[0].plain_text
  );

  const handleClick = (): void => {
    const index = Math.floor(Math.random() * locationNames.length);
    setRandom(locationNames[index]);
  };

  return (
    <>
      <button onClick={() => handleClick()}>随便</button>
      {random && <div className={styles.results}>{random}</div>}
    </>
  );
};

export default Randomiser;
