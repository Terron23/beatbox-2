// import React, { Component } from "react";
// import Heading from "./sub_components/heading";
// import bg1 from "../../images/bg-img/70.jpg";
// import bg2 from "../../images/bg-img/71.jpg";
// import bg3 from "../../images/bg-img/72.jpg";
// import { Link } from "react-router-dom";

// const CityTemplate = ({ title, img }) => {
//   return (
//     <div className="col-12 col-md-6 col-lg-4">
//       <div
//         className="single-post-area mb-100 wow fadeInUp"
//         data-wow-delay="700ms"
//       >
//         <Link to={`/search-studio//${title}`}>
//           <img src={img} alt="" />
//         </Link>

//         <div className="post-meta">
//           <Link to={`/search-studio//${title}`} className="post-date">
//             {title}
//           </Link>
//         </div>

//         <Link to={`/search-studio//${title}`} className="post-title">
//           Featured Studios in {title}
//         </Link>
//         <Link to={`/search-studio//${title}`} className="btn continue-btn">
//           <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default class City extends Component {
//   render() {
//     return (
//       <section className="roberto-blog-area section-padding-100-0">
//         <div className="container">
//           <Heading
//             title={"Explore"}
//             subtitle="Find & Book Studios At Your Convience"
//           />

//           <div className="row">
//             <CityTemplate title="NYC" img={bg1} />
//             {/* <CityTemplate title="London" img={bg3} />
//             <CityTemplate title="Philadeliphia" img={bg2} /> */}
//           </div>
//         </div>
//       </section>
//     );
//   }
// }
