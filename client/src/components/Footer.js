import React, { Component } from 'react';



export default class Footer extends Component {
  render() {
    return (

		<footer class="footer-area section-padding-80-0">
      
        <div class="main-footer-area">
            <div class="container">
                <div class="row align-items-baseline justify-content-between">
                  
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-80">
                          
                            <a href="#" class="footer-logo">
								{/* <img src="img/core-img/logo2.png" alt="" /> */}
								Studio Hunt
								</a>

                            {/* <h4>+12 345-678-9999</h4> */}
                            <span>studiohunt@outlook.com.com</span>
                            {/* <span>856 Cordia Extension Apt. 356, Lake Deangeloburgh, South Africa</span> */}
                        </div>
                    </div>

                   
                    <div class="col-12 col-sm-6 col-lg-3">
                        <div class="single-footer-widget mb-80">
                           
                            <h5 class="widget-title">Our Blog</h5>

                            
                            <div class="latest-blog-area">
                                <a href="#" class="post-title">Freelance Design Tricks How</a>
                                <span class="post-date"><i class="fa fa-clock-o" aria-hidden="true"></i> Jan 02, 2019</span>
                            </div>

                          
                            <div class="latest-blog-area">
                                <a href="#" class="post-title">Free Advertising For Your Online</a>
                                <span class="post-date"><i class="fa fa-clock-o" aria-hidden="true"></i> Jan 02, 2019</span>
                            </div>
                        </div>
                    </div>

               
                    <div class="col-12 col-sm-4 col-lg-2">
                        <div class="single-footer-widget mb-80">
                           
                            <h5 class="widget-title">Links</h5>

                           
                            <ul class="footer-nav">
                                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i> About Us</a></li>
                                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i> Book Now</a></li>
                                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i> Career</a></li>
                                <li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i> FAQs</a></li>
                            </ul>
                        </div>
                    </div>

               
                    <div class="col-12 col-sm-8 col-lg-4">
                        <div class="single-footer-widget mb-80">
                        
                            <h5 class="widget-title">Subscribe Newsletter</h5>
                            <span>Subscribe our newsletter gor get notification about new updates.</span>

                          
                            <form action="index.html" class="nl-form">
                                <input type="email" class="form-control" placeholder="Enter your email..." />
                                <button type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     
        <div class="container">
            <div class="copywrite-content">
                <div class="row align-items-center">
                    <div class="col-12 col-md-8">
                      
                        <div class="copywrite-text">
         
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                      
                        <div class="social-info">
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    );
  }
}




