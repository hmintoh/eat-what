import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home({ results }) {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Eat what?</title>
        <meta
          name="description"
          content="A developer's attempt at addressing the daily struggle of 'what are we going to eat today?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
        {showLocations && <div>opending implementation</div>}
      </main>

      <footer className={styles.footer}>
        <span>
          &copy; {new Date().getFullYear()} by{" "}
          <a href="https://www.thuimin.com/" target="_blank" rel="noreferrer">
            hmintoh
          </a>
          . made with 💛 in singapore.
        </span>
      </footer>
    </div>
  );
}
