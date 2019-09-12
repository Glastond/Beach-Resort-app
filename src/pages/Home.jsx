import React from "react";
import { Link } from "react-router-dom";

import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
import Services from "../Components/Services/Services";
import FeaturedRooms from "../Components/FeaturedRooms/FeaturedRooms";

// Importing Styled Components
// import Button from "../Components/StyledHero/StyledHero";

// Context
import { RoomContext } from "../context";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms></FeaturedRooms>
    </>
  );
}
