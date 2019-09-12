import React, { Component } from "react";
import Title from "../Title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, architecto."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hicking",
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, architecto."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, architecto."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, architecto."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon} </span>
                <h6>{item.title}</h6>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
