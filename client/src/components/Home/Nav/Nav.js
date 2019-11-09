import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import navImg from './images/logo/sh_logo.png';


class  NavBar extends Component  {  
constructor(props){
  super(props);
  this.state ={
newclassNameName: "",
isActive: "",

  }
}



 renderContent(){
   switch(this.props.auth){
     case null:
     return 
     case false:
     return   [<Link className="nav-link" to="/post-studio"><i className="fa fa-plus"></i>Add Your Studio</Link>,
    <Link className="nav-link" to="/sign-up">Sign Up/Login</Link>].map((value, i)=>{
       return (<li key={i} className="nav-item">{value}</li>)
     })
     default:
     return [<Link className="nav-link" to="/post-studio"><i className="fa fa-plus"></i> Add Your Studio</Link>,
     <Link to="/userprofile" className="nav-link">{this.props.auth.name}'s' Profile</Link>,
    <a className="nav-link" href="/api/logout">Logout</a>].map((value, i)=>{
     return (<li key={i} className="nav-item">{value}</li>)
     })
   }
 }
 




  render(){
    let {revealSearch} =this.props; 
    return (
      <div className="main-header-area">
      <div className="classy-nav-container breakpoint-off">
          <div className="container-fluid">
         
              <nav className="classy-navbar justify-content-between" id="robertoNav">

              
                  <Link className="nav-brand" to="/">Studio Hunt</Link>

                
                  <div className="classy-navbar-toggler">
                      <span className="navbarToggler">
                        <span></span><span></span><span></span></span>
                  </div>

               
                  <div className="classy-menu">
                
                      <div className="classycloseIcon">
                          <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                      </div>
                
                      <div className="classynav">
                          <ul id="nav">
                            
                             
                            
                               {this.renderContent()}  
                              
                              {/* <li><Link to="./contact.html">Contact</Link></li> */}
                          </ul>

                     
                          <div className="search-btn ml-4">
                              <i className="fa fa-search" onClick={revealSearch}></i>
                          </div>

                        
                    
                          <div className="book-now-btn ml-3 ml-lg-5">
                              <Link to="/search-studio">Book Now <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                          </div>


                          
                      </div>
                
                  </div>
              </nav>
          </div>
      </div>
  </div>
  
    )
    }
  }


    function mapStateToProps({auth}){
      //State from reducers/index.js file  gets passed to header component as props
      return {auth}
    }

    export default connect(mapStateToProps)(NavBar);



