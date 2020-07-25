import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: [
        {
          lNum: "4242424242424242",
          expDate: "06/24",
          cvc: "123",
          last4: "4242",
          fName: "Bob",
          lName: "Test",
        },
      ],
    };
  }
  render() {
    const cards = this.state.cardInfo.map((c) => {
      return (
        <div>
          <Card cardInfo={c} key={uuidv4()} />
        </div>
      );
    });

    return (
      <div>
        <h1>CardViewer</h1>
        {cards}
      </div>
    );
  }
}

export default CardList;
