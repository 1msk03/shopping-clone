import React from "react";
import data from "../Data";

const ListItem = (props) => {
  return (
    <div className="listItem__container">
      <img src={data.image} alt={data.name} className="listItem__image" />
    </div>
  );
};

export default ListItem;
