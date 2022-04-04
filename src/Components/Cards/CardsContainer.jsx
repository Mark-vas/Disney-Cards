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
import Preloader from "../Preloader/Preloader";

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
        {this.props.error ? (
          <h1>{this.props.error}</h1>
        ) : (
          <>
            <div>
              <FormControlLabel
                label="Show liked cards"
                control={<Checkbox onChange={this.clickFilter} />}
              ></FormControlLabel>
            </div>
            {this.props.isPreloader ? (
              <Preloader isPreloader={this.props.isPreloader} />
            ) : (
              <Cards
                cards={
                  this.state.editCheckbox
                    ? this.props.allCardsLike
                    : this.props.cards
                }
                cardsLikeId={this.props.cardsLikeId}
                clickLikeAC={this.props.clickLikeAC}
                getAllLikeCardsAC={this.props.getAllLikeCardsAC}
                clickDelCardsAC={this.props.clickDelCardsAC}
              />
            )}
          </>
        )}{" "}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cards: state.cards,
    cardsLikeId: state.cardsLikeId,
    allCardsLike: state.allCardsLike,
    isPreloader: state.isPreloader,
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  getCardsTC,
  clickLikeAC,
  getAllLikeCardsAC,
  clickDelCardsAC,
})(CardsContainer);
