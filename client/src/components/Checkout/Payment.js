import React, { Component, Fragment } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./sub_components/CheckoutForm";
import { connect } from "react-redux";
import { fetchUser, fetchStudio } from "../../actions";
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import SignUp from "../SignUp/SignUp"
import Loading from "../Reusable/Loading/Loading"
import './css/payment.css'

class Payment extends Component {


  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchStudio();
  }

  checkoutDetails = () => {
    const search = this.props.location.search;
    let params=[]
    return this.props.studio
      .filter(studio => {
        return studio._id === Number(this.props.match.params.studioid);
      })
      .map(studio => {
        return (
          <div>
           <ListGroup>
                  <ListGroupItem>
                  <span className="checkout-details">StudioName:</span><br /> {studio.studio_name}
                  </ListGroupItem>
                  <ListGroupItem>
                  <span className="checkout-details">Contact Info:</span> <br />{studio.contact_name}<br />
                  </ListGroupItem>
                  <ListGroupItem>
                  <span className="checkout-details">Studio Price:</span><br /> {studio.studio_price}.00
                  </ListGroupItem>
                  <ListGroupItem>
                 <span className="checkout-details">Venue:</span> <br />{studio.studio_venue}
                 </ListGroupItem>
               <ListGroupItem>
               <span className="checkout-details">Reserved Date & Time</span><br />
                  {search
                    .replace(/%20/g, " ")
                    .replace(/=/g, ": ")
                    .split("?")
                    .map((param, i) => {
                      let num = i+1
                      params.push(param)
                     
                      if(params[0]===""){
                        params.shift()
                      }
                     
                      if(params.length === 3){

                        let timein = params[0]
                        let timeout = params[1]
                        let  date = params[2]
                       
                        params=[]
                       
                      return (<span>  {timein} <br/> {timeout} <br/> {date} <hr /></span>)
                      }
                    })}
               </ListGroupItem>
                </ListGroup>
          </div>
        );
      });
  };

  push = () => {
    return this.props.history.push("/confirmation");
  };

  render() {
    
    if (this.props.auth === false ) {
      return <SignUp />;
    }
  else if(!this.props.studio || this.props.auth == null){
    return <Loading />
  }
    return (
      <div className="container">
        <StripeProvider apiKey="pk_test_si8mdcnBScBgROVlk6i3lc7b">
          <Elements>
            <CheckoutForm
              studioid={this.props.match.params.studioid}
              studio={this.props.studio}
              email={this.props.auth.email}
              name={this.props.auth.contact_name}
              checkoutDetails={this.checkoutDetails}
              handleSubmit={this.handleSubmit}
              studioData={this.studioData}
              auth={this.props.auth}
              push={this.push}
            />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

function mapStateToProps({ auth, studio }) {
  return { auth, studio };
}

export default connect(mapStateToProps, { fetchUser, fetchStudio })(Payment);
