import React, { useState, useEffect } from "react";
import { getLocations } from "@/utils/notion";
import { isWithinInterval, getTime } from "@/utils/date";
import { TMeals, mealRange } from "@/utils/types";

import Footer from "@/components/footer";
import Locationlist from "@/components/location-list";
import Randomiser from "@/components/randomiser";
import Button from "@/components/button";

import {
  BodyWrapper,
  MainWrapper,
  Description,
  Section,
} from "@/styles/home.styles";

interface HomeProps {
  locations: any;
}

const Home = ({ locations }: HomeProps): JSX.Element => {
  const [showLocations, setShowLocations] = useState(false);
  const [mealtime, setMealtime] = useState<TMeals[]>([]);

  useEffect(() => {
    getMealtime();
    getTimeSensitiveLocations();
  }, []);

  const getMealtime = (): void => {
    const now = getTime();
    const meal = [];

    isWithinInterval(now, mealRange.breakfast) && meal.push("breakfast");

    isWithinInterval(now, mealRange.lunch) && meal.push("lunch");

    isWithinInterval(now, mealRange.dinner) && meal.push("dinner");

    (isWithinInterval(now, mealRange.earlySupper) ||
      isWithinInterval(now, mealRange.lateSupper)) &&
      meal.push("supper");

    setMealtime(meal);
    setTimeout(getMealtime, 1000);
  };

  const getTimeSensitiveLocations = () => {
    return locations.filter((location) =>
      location.properties.meals.multi_select.some((meal) =>
        mealtime.includes(meal.name)
      )
    );
  };

  return (
    <BodyWrapper>
      <MainWrapper>
        <Section>
          <h1>eat what? 🤔</h1>
          <Description>
            <p>
              a developer&apos;s attempt at addressing the daily struggle of
              &apos;what are we going to eat today&apos;?
            </p>

            {mealtime.length === 0 ? (
              <p>
                it&apos;s {new Date().getHours()}:{new Date().getMinutes()} 😴
              </p>
            ) : (
              <p>
                it&apos;s <em>{mealtime.join("/")}</em> time!
              </p>
            )}
          </Description>

          <Randomiser locations={getTimeSensitiveLocations()} />
        </Section>

        <Section>
          <p>still unsure about what to eat? browse our full list of noms.</p>

          <Button onClick={() => setShowLocations(!showLocations)}>
            {showLocations ? "hide" : "show"}
          </Button>

          {showLocations && (
            <Locationlist locations={getTimeSensitiveLocations()} />
          )}
        </Section>
      </MainWrapper>

      <Footer />
    </BodyWrapper>
  );
};

export const getStaticProps = async () => {
  const locations = await getLocations();

  return {
    props: { locations: locations.data },
  };
};

export default Home;
