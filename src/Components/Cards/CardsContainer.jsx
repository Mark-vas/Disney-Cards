import React from "react";
import { connect } from "react-redux";
import {
  getCardsTC,
  clickLikeAC,
  getAllLikeCardsAC,
  clickDelCardsAC,
} from "../../Store/CardsReduser";
import Cards from "./Cards";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

class CardsContainer extends React.Component {
  componentDidMount() {
    this.props.getCardsTC();
  }

  state = {
    editCheckbox: false,
  };

  clickFilter = (e) => {
    this.setState({
      editCheckbox: e.target.checked,
    });
  };

  render() {
    return (
      <>
        <div>
          <FormControlLabel
            label="Show liked cards"
            control={<Checkbox onChange={this.clickFilter} />}
          ></FormControlLabel>
        </div>
        <Cards
          cards={
            this.state.editCheckbox ? this.props.allCardsLike : this.props.cards
          }
          cardsLikeId={this.props.cardsLikeId}
          clickLikeAC={this.props.clickLikeAC}
          getAllLikeCardsAC={this.props.getAllLikeCardsAC}
          clickDelCardsAC={this.props.clickDelCardsAC}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cards: state.cards,
    cardsLikeId: state.cardsLikeId,
    allCardsLike: state.allCardsLike,
  };
};

export default connect(mapStateToProps, {
  getCardsTC,
  clickLikeAC,
  getAllLikeCardsAC,
  clickDelCardsAC,
})(CardsContainer);
