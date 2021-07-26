import React, { useState } from "react";
import { getLocations } from "@/lib/notion";

import styles from "@/styles/Home.module.css";

interface HomeProps {
  locations: any;
}

const Home = ({ locations }: HomeProps): JSX.Element => {
  const [showLocations, setShowLocations] = useState(false);

  const getDatabaseDisplay = () => {
    let jsx = [];
    locations.forEach((location, i) => {
      jsx.push(
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
      );
    });
    return jsx;
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>eat what?</h1>
        <p className={styles.description}>
          a developer&apos;s attempt at addressing the daily struggle of
          &apos;what are we going to eat today&apos;?
        </p>

        <h2>Locations</h2>
        <p className={styles.description}>
          still unsure about what to eat? browse our full list of noms.
        </p>
        <button onClick={() => setShowLocations(!showLocations)}>
          {showLocations ? "hide" : "show"}
        </button>
        {showLocations && <div>{getDatabaseDisplay()}</div>}
      </main>

      <footer className={styles.footer}>
        <span>
          &copy; {new Date().getFullYear()} by{" "}
          <a href="https://www.thuimin.com/" target="_blank" rel="noreferrer">
            hmintoh
          </a>
          . made with ♡ in singapore.
        </span>
      </footer>
    </div>
  );
};

export const getStaticProps = async () => {
  const locations = await getLocations();

  return {
    props: { locations: locations.data },
  };
};

export default Home;
