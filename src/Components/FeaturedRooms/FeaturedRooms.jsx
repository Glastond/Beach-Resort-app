// This Component displays all  rooms with featured:true on the Home Page
import React, { Component } from "react";
import { RoomContext } from "../../context";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    let roomsComp = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : roomsComp}
        </div>
      </section>
    );
  }
}
