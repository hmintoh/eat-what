import React, { useState, useEffect } from "react";
import { getLocations } from "@/utils/notion";
import { isWithinInterval, getTime } from "@/utils/date";
import { TMeals } from "@/utils/types";

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

const meals = {
  lateSupper: {
    start: new Date().setHours(0, 0, 0),
    end: new Date().setHours(2, 59, 59),
  },
  breakfast: {
    start: new Date().setHours(6, 0, 0),
    end: new Date().setHours(11, 59, 59),
  },
  lunch: {
    start: new Date().setHours(11, 0, 0),
    end: new Date().setHours(15, 59, 59),
  },
  dinner: {
    start: new Date().setHours(16, 0, 0),
    end: new Date().setHours(21, 29, 59),
  },
  earlySupper: {
    start: new Date().setHours(21, 30, 0),
    end: new Date().setHours(23, 59, 59),
  },
};

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

    isWithinInterval(now, meals.breakfast) && meal.push("breakfast");

    isWithinInterval(now, meals.lunch) && meal.push("lunch");

    isWithinInterval(now, meals.dinner) && meal.push("dinner");

    (isWithinInterval(now, meals.earlySupper) ||
      isWithinInterval(now, meals.lateSupper)) &&
      meal.push("supper");

    setMealtime(meal);
    setTimeout(getMealtime, 1000);
  };

  const getTimeSensitiveLocations = () => {
    console.log("hi");
    return;
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
                its {new Date().getHours()}:{new Date().getMinutes()} 😴
              </p>
            ) : (
              <p>
                its <em>{mealtime.join("/")}</em> time!
              </p>
            )}
          </Description>

          <Randomiser locations={locations} />
        </Section>

        <Section>
          <Description>
            <em>
              still unsure about what to eat? browse our full list of noms.
            </em>
          </Description>

          <Button onClick={() => setShowLocations(!showLocations)}>
            {showLocations ? "hide" : "show"}
          </Button>

          {showLocations && <Locationlist locations={locations} />}
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
