import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const RemoveFavourites = () => {
  return (
    <>
      <span
        style={{
          fontSize: "12px",
          color: "#fff",
          marginRight: "2px",
        }}
      >
        Remove From Favourites
      </span>
      <IoIosCloseCircleOutline
        style={{
          color: "#fff",
        }}
      />
    </>
  );
};

export default RemoveFavourites;
