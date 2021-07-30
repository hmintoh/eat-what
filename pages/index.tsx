import React, { useState } from "react";
import { getLocations } from "@/lib/notion";

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

  return (
    <BodyWrapper>
      <MainWrapper>
        <Section>
          <h1>eat what?</h1>
          <Description>
            a developer&apos;s attempt at addressing the daily struggle of
            &apos;what are we going to eat today&apos;?
          </Description>

          <Randomiser locations={locations} />
        </Section>

        <Section>
          <h2>Locations</h2>
          <Description>
            still unsure about what to eat? browse our full list of noms.
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
