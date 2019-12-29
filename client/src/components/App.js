import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Home/Header";
import Home from "./Home/Home";
import ListStudio from "./ListStudio/AddStudioForm/ListStudio";
import Availibility from "./ListStudio/Availibility/Availibility";
import SignUp from "./SignUp/SignUp";
import StudioSearch from "./Studios/AllStudios/StudioSearch";
import SingleStudio from "./Studios/SingleStudio/SingleStudio";
import Profile from "./Profile/Profile";
import Payment from "./Checkout/Payment";
import Confirmation from "./Checkout/sub_components/OrderConfirmation";
import { connect } from "react-redux";
import Footer from "./Footer/Footer";
import * as actions from "../actions";
import "./assets/css/App.css";
import Design from "./ListStudio/Design/Design";
import Details from "./ListStudio/Details/Details";
import Faq from './FAQ/Faq';
import ViewStudio from './ListStudio/ViewStudio/ViewStudio';
import ScrollTop from './assets/ScrollTop';
import Loading from './Reusable/Loading/Loading';

class App extends Component {
  constructor(props){
super(props);
this.state ={
  isLoading:true,
}
  }

  componentDidMount() {
    this.props.fetchUser();
    this.setState({isLoading:false})
  }



  render() {
    const {isLoading}=this.state;

    if(isLoading){
      return <Loading />
    }
    return (
      <div>
     
      
        <BrowserRouter>
        <ScrollTop>
            <Header />
         
            <Route
              exact path="/"
              component={Home}
            />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/post-studio" 
            component={ ListStudio} />
            <Route
              path="/search-studio/:search?/:location?/:startdate?"
              component={StudioSearch}
            />
            <Route
              path="/view-studio/:id"
              component={ViewStudio}
            />
            <Route path="/single-studio/:id" 
            component={SingleStudio}
            />
            <Route path="/userprofile" component={Profile} />
            <Route path="/payment/:studioid" component={Payment} />
            <Route
              path="/availibility/:studioName?/:id?"
              component={Availibility}
            />
            <Route path="/design/:studioName?/:id?" component={Design} />
            <Route path="/details/:studioName?/:id?" component={Details} />
            <Route path="/post-studio/:studioname/:id" component={ListStudio} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/faqs" component={Faq} />
            <Footer />
       
            </ScrollTop>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
