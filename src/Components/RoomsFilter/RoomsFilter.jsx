import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";
import Title from "../Title/Title";

// Get All unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter() {
  const context = useContext(RoomContext);

  const {
    rooms,
    changeHandler,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    size,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  //   Get unique types
  let types = getUnique(rooms, "type");
  // Add all
  types = ["all", ...types];
  //   map to jsx
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  //   For selecting number of Guests
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  console.log(minPrice, maxPrice);

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Select Type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={changeHandler}
          >
            {types}
          </select>
        </div>
        {/* End Of Select Type */}
        {/* Guests Type */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={changeHandler}
          >
            {people}
          </select>
        </div>
        {/* End Of Guests Type */}
        {/* Room Price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={changeHandler}
            className="form-control"
          />
        </div>
        {/* End of Room Price */}

        {/* Size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={changeHandler}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={changeHandler}
              className="size-input"
            />
          </div>
        </div>
        {/* End of Size */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={changeHandler}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={changeHandler}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* End of extras */}
      </form>
    </section>
  );
}
