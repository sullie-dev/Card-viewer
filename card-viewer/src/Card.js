import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewable: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    console.log(this.state.isViewable);
    this.setState({ isViewable: !this.state.isViewable });
  }
  render() {
    return (
      <div>
        {this.state.isViewable ? (
          <div className="Card">
            <h2 className="Card-Number">{this.props.cardInfo.lNum}</h2>
            <h3> Exp Date: {this.props.cardInfo.expDate}</h3>
            <h3>{this.props.cardInfo.cvc}</h3>
            <div>
              <h3>{this.props.cardInfo.fName}</h3>
              <h3>(this.props.cardInfo.lName}</h3>
            </div>
          </div>
        ) : (
          <div className="Card">
            <h2 className="Card-Number">
              ************{this.props.cardInfo.last4}
            </h2>
            <h3>Exp Date: {this.props.cardInfo.expDate}</h3>
            <h3>***</h3>
            <div>
              <h3>{this.props.cardInfo.fName}</h3>
              <h3>(this.props.cardInfo.lName}</h3>
            </div>
          </div>
        )}
        {this.state.isViewable ? (
          <button onClick={this.handleClick}>
            <i className="far fa-eye-slash"></i>
          </button>
        ) : (
          <button onClick={this.handleClick}>
            <i className="far fa-eye"></i>
          </button>
        )}
      </div>
    );
  }
}

export default Card;
