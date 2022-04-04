import React from "react";
import styles from "./Card.module.css";
import img from "../../../Images/gui_like_icon_157110.png";

const Card = (props) => {
  const notLike = {
    filter: "grayscale(1)",
    width: "50px",
  };

  const yesLike = {
    filter: "none",
    width: "50px",
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={props.card.imageUrl} alt="" />
        <p>{props.card.name}</p>
      </div>
      <img
        id={props.card._id}
        onClick={props.clickLike}
        src={img}
        style={props.like ? yesLike : notLike}
      />
      <button
        onClick={props.clickDel}
        id={props.card._id}
        className={styles.btn}
      >
        Delete
      </button>
    </div>
  );
};
export default Card;
