import React from "react";
import styles from "./Cards.module.css";
import Card from "./Card/Card";

const Cards = (props) => {
  let clickLike = (e) => {
    let id = parseInt(e.target.id);
    props.clickLikeAC(id);
    props.getAllLikeCardsAC();
  };
  let clickDel = (e) => {
    let id = parseInt(e.target.id);
    props.clickDelCardsAC(id);
    props.getAllLikeCardsAC();
  };

  let cardsElem = props.cards.map((card) => {
    return (
      <Card
        clickDel={clickDel}
        clickLike={clickLike}
        card={card}
        like={props.cardsLikeId.includes(card._id)}
        key={card._id}
      />
    );
  });
  return (
    <>
      <div className={styles.cards}>{cardsElem}</div>
    </>
  );
};
export default Cards;
