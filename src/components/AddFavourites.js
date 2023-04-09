import React from "react";
import { IoIosHeart } from "react-icons/io";

const AddFavourites = () => {
  return (
    <>
      <span
        style={{
          fontSize: "14px",
          color: "#fff",
          marginRight: "2px",
        }}
      >
        Add To Favourites
      </span>
      <IoIosHeart style={{ color: "rgb(229, 9, 20)" }} />
    </>
  );
};

export default AddFavourites;
