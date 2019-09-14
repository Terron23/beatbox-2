import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Home/Header'
import Home from './Home/Home'
import ListStudio from './ListStudio'
import Availibility from './Availibility'
import SignUp from './SignUp'
import StudioSearch from './Studios/StudioSearch'
import SingleStudio from './Studios/SingleStudio/SingleStudio'
import Profile from './Profile/Profile'
import Payment from './Checkout/Payment'
import Confirmation from './Checkout/OrderConfirmation'
import {connect} from 'react-redux'
import Footer from './Footer'
import * as actions from '../actions'
import Preloader from '../components/assets/preloader'





 class App extends Component {

componentDidMount(){
  this.props.fetchUser()

  }

  render() {
    return (
      <div>
  
<Preloader />

       <BrowserRouter>
     
       <div>
       <Header />
         <Route exact  path="/" component={Home}/> 
         <Route path="/sign-up" component={SignUp} />
         <Route path="/post-studio" component={ListStudio} />
         <Route path="/search-studio/:search?/:location?/:startdate?" component={StudioSearch} />
         <Route path="/single-studio/:id" component={SingleStudio} />
         <Route path="/userprofile" component={Profile} />
         <Route path="/payment/:studioid" component={Payment} />
         <Route path="/availibility/:studioName?/:id?" component={Availibility} />
         <Route path="/post-studio/:studioname/:id" component={ListStudio} />
         <Route path="/confirmation" component={Confirmation} />
         <Footer />
         </div>
        
       </BrowserRouter>

    
 
      </div>
    );
  }
}

export default connect(null, actions)(App)
