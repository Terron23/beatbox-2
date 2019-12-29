import React, { Component } from "react";
import axios from "axios";
import { CardElement, injectStripe } from "react-stripe-elements";
import Title from "../../assets/Title";

class CheckoutForm extends Component {

  
  handleSubmit = async e => {
    e.preventDefault();
    let { auth, studio } = this.props;
    let date = new Date();
    let month = date.getMonth() + 1;
    let studioName = e.target.studioname.value;
    let name = e.target.name.value;
    let payment = e.target.price.value;
    let studioId = this.props.studioid;
    let dateBooked =
      month.toString() +
      "/" +
      date.getDate().toString() +
      "/" +
      date.getFullYear().toString();
    console.log(studioId);
    try {
      let { token } = await this.props.stripe.createToken({ name: "test" });
      let response = await axios.post("/api/payment", {
        token: token.id,
        studioName,
        payment,
        studioId: studioId,
        dateBooked,
        studioOwner: name,
        cardInfo: ""
      });
      this.props.push();
    } catch (e) {
      console.log(e); // undefined

      console.log("Purchase Complete!");
    }
  };

  render() {
    let {
      email,
      studio,
      studioid,
      studioData,
      checkoutDetails,
      name
    } = this.props;
    console.log(studio);
    return (
      <div className="container">
        <div className="row">
          <Title header="Book Your Session" subtitle="This is only a test" />
          <div className="checkout col-md-6">
            <form onSubmit={this.handleSubmit}>
            

              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  defaultValue={email}
                />
              </div>

              <div className="form-group">
                <label for="email">Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  defaultValue={name}
                />
              </div>

              <div className="form-group">
                <label>Card Information</label>
                <CardElement className="form-control" />
              </div>
              <button className="btn roberto-btn w-100" type="submit">
                Reserve
              </button>
            </form>
          </div>

          <div className="col-md-4">{checkoutDetails()}</div>
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
