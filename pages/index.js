import { useEffect } from "react";
import { Client } from "@notionhq/client";

import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home({ results }) {
  const getDatabaseDisplay = () => {
    let jsx = [];
    results.forEach((location, i) => {
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
      <Head>
        <title>Eat what?</title>
        <meta
          name="description"
          content="A developer's attempt at addressing the daily struggle of 'what are we going to eat today?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{getDatabaseDisplay()}</main>
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return {
    props: {
      results: res.results,
    },
  };
}
