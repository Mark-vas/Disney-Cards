import { api } from "../Api/Api";

const ALL_CARDS = "ALL_CARDS";
const LIKE = "LIKE";
const ALL_LIKE_CARDS = "ALL_LIKE_CARDS";
const DEL_CARDS = "DEL_CARDS";

let stateInitialization = {
  cards: [],
  cardsLikeId: [],
  allCardsLike: [],
};

const cardsReduser = (state = stateInitialization, action) => {
  switch (action.type) {
    case ALL_CARDS:
      return { ...state, cards: action.cards };
    case LIKE:
      return {
        ...state,
        cardsLikeId: [...state.cardsLikeId].includes(action.id)
          ? state.cardsLikeId.filter((id) => id !== action.id)
          : [...state.cardsLikeId, action.id],
      };
    case ALL_LIKE_CARDS:
      const arrFilter = state.cards.filter((item) => {
        return state.cardsLikeId.includes(item._id);
      });
      return { ...state, allCardsLike: arrFilter };

    case DEL_CARDS:
      const arrDel = state.cards.filter((item) => {
        return action.id !== item._id;
      });
      return { ...state, cards: arrDel };

    default:
      return state;
  }
};

const cardsAC = (cards) => ({ type: "ALL_CARDS", cards });

export const getCardsTC = () => {
  return (dispatch) => {
    api.getCards().then((res) => {
      dispatch(cardsAC(res.data));
    });
  };
};

export const clickDelCardsAC = (id) => ({ type: "DEL_CARDS", id });

export const clickLikeAC = (id) => ({ type: "LIKE", id });

export const getAllLikeCardsAC = () => ({ type: "ALL_LIKE_CARDS" });

export default cardsReduser;
