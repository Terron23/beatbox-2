import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class  TopNav extends Component  {  

  render(){
    return (
     
        <div className="top-header-area">
        <div className="container">
            <div className="row">

                <div className="col-6">
                    <div className="top-header-content">
                        
                        <a href="mailto:studiohunt@outlook.com"><i className="icon_mail"></i> <span>studiohunt@outlook.com</span></a>
                    </div>
                </div>

                <div className="col-6">
                    <div className="top-header-content">
                    
                        <div className="top-social-area ml-auto">
                            <Link target="_blank" to="https://www.facebook.com/Studio-Hunt-337007926930145/">
                           <i className="fa fa-facebook" aria-hidden="true"></i></Link>
                            <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                            
                            <Link to="/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

  
    )
    }
  }


    export default TopNav;




