import React, {Component} from 'react';
import {connect} from 'react-redux';
import Title from './assets/Title'




const LeftSide = ({oauth}) =>{
  return(
  <div className="col-md-6">

    <form action="">
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" className="form-control" id="email" />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" />
  </div>
  <div className="checkbox">
    <label><input type="checkbox" /> Remember me</label>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
</form>
</div>
)
}


const RightSide = ({oauth}) =>{
  return(
  <div className="col-md-6">

    <a className="btn btn-block btn-primary" href="/auth/google">Login With Google</a>
    <a className="btn btn-block btn-primary" href="/auth/facebook">Login With Facebook</a>
  
</div>
)
}

class SignUp extends Component  {  



  render(){
    return (
    <div  className="container">
   <Title header="Sign In/Sign Up" classProp={`container`}/>

     <RightSide  />
     <hr />
	   <LeftSide />

    </div>
     )
    }
  }


    function mapStateToProps({auth}){
  
      return {auth}
    }

    export default connect(mapStateToProps)(SignUp);




