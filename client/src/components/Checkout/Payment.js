import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import {connect} from 'react-redux';
import { fetchUser, fetchStudio } from '../../actions';



class Payment extends Component {


  componentDidMount() {
    this.props.fetchUser()
    this.props.fetchStudio()
 
  }



checkoutDetails =()=>{
  return  this.props.studio.filter(studio=> {
    return studio._id === this.props.match.params.studioid
  })
.map(studio=>{
return (<div>
  <label>Studio Details</label>
  <table className="table table-striped">
    <tbody>
        <tr>
          <th>Studio Name</th>
           <td>{studio.studioName}</td>
           <div>
     
           </div>
        </tr>
        <tr>
          <th>Contact Name</th>
          <td>{studio.name}</td>
        
           
        </tr>
        <tr>
          <th>Price</th>
           <td>${studio.price}.00</td>
       
        </tr>

         <tr>
          <th>Venue</th>
           <td>{studio.venue}</td>
          
        </tr>
       

        </tbody>
    </table>
    </div>
)
})
}

    push =()=>{
      return  this.props.history.push('/confirmation')
    }

    render() {
      if(!this.props.auth || !this.props.studio){
        return 'Loading...'
      }
        return (
          <div className="container">
      
        
          
          <StripeProvider 
          apiKey="pk_test_si8mdcnBScBgROVlk6i3lc7b"
          >
         
          
              <Elements>
                <CheckoutForm 
                studioid={this.props.match.params.studioid}
                studio ={this.props.studio} 
                email ={this.props.auth.email}
                name={this.props.auth.name}
                checkoutDetails={this.checkoutDetails}
                handleSubmit={this.handleSubmit}
                studioData={this.studioData}
                auth = {this.props.auth}
               
                push={this.push}
                />
              </Elements>
          
          </StripeProvider>
          </div>

          
        );
      }
    }
  

    function mapStateToProps({auth, studio}){
      //State from reducers/index.js file  gets passed to header component as props
      return {auth, studio}
    }
  
    export default connect(mapStateToProps,  { fetchUser , fetchStudio, })(Payment);
