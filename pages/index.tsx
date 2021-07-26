import React, { useState } from "react";
import { getLocations } from "@/lib/notion";

import Footer from "@/components/footer";
import Locationlist from "@/components/location-list";
import Randomiser from "@/components/randomiser";
import styles from "@/styles/Home.module.css";

interface HomeProps {
  locations: any;
}

const Home = ({ locations }: HomeProps): JSX.Element => {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>eat what?</h1>
        <p className={styles.description}>
          a developer&apos;s attempt at addressing the daily struggle of
          &apos;what are we going to eat today&apos;?
        </p>
        <Randomiser locations={locations} />

        <section>
          <h2>Locations</h2>
          <p className={styles.description}>
            still unsure about what to eat? browse our full list of noms.
          </p>

          <button onClick={() => setShowLocations(!showLocations)}>
            {showLocations ? "hide" : "show"}
          </button>

          {showLocations && <Locationlist locations={locations} />}
        </section>
      </main>

      <Footer />
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
