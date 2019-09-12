// This Component is used to Display deatails of a Single room when you click Features From Any Room Component

import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

// Styled Component
import StyledHero from "../Components/StyledHero/StyledHero";

export default class SingleRoom extends Component {
  // componentDidMount() {}
  state = {
    slug: this.props.match.params.slug,
    defaultBcg
  };

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No Such Room Found!</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      pets,
      images,
      extras,
      breakfast,
      price
    } = room;

    const [mainImg, ...defaultImgs] = images;

    return (
      <>
        <StyledHero img={mainImg || defaultImgs}>
          <Banner title={`${name} Room`}>
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultImgs.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} Sq.Ft</h6>
              <h6>
                max capacity :{" "}
                {capacity < 1 ? `${capacity} person` : `${capacity} people`}
              </h6>
              <h6>
                {pets ? "Pets Allowed" : "<strong>No Pets Allowed</strong>"}
              </h6>
              <h6>{breakfast && "Free Breakfast Included"}</h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
