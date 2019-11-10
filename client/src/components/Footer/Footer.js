import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-area section-padding-80-0">
        <div className="main-footer-area">
          <div className="container">
            <div className="row align-items-baseline justify-content-between">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget mb-80">
                  <Link to="/" className="footer-logo">
                    Studio Hunt
                  </Link>

                  <span>studiohunt@outlook.com.com</span>
                </div>
              </div>

              <div className="col-12 col-sm-4 col-lg-2">
                <div className="single-footer-widget mb-80">
                  <h5 className="widget-title">Explore</h5>

                  <ul className="footer-nav">
                    <li>
                      <Link to="/">
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/search-studio">
                        <i className="fa fa-caret-right" aria-hidden="true"></i>{" "}
                        Book Now
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-caret-right" aria-hidden="true"></i>{" "}
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link to="/faqs">
                        <i className="fa fa-caret-right" aria-hidden="true"></i>{" "}
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-sm-8 col-lg-4">
                <div className="single-footer-widget mb-80">
                  <h5 className="widget-title">Subscribe Newsletter</h5>
                  <span>
                    Subscribe our newsletter gor get notification about new
                    updates.
                  </span>

                  <form action="index.html" className="nl-form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email..."
                    />
                    <button type="submit">
                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copywrite-content">
            <div className="row align-items-center">
              <div className="col-12 col-md-8">
                <div className="copywrite-text"></div>
              </div>
              <div className="col-12 col-md-4">
                <div className="social-info">
                  <a
                    href="https://www.facebook.com/Studio-Hunt-337007926930145/?modal=admin_todo_tour"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/Studio-Hunt-337007926930145/?modal=admin_todo_tour"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/Studio-Hunt-337007926930145/?modal=admin_todo_tour"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/Studio-Hunt-337007926930145/?modal=admin_todo_tour"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
