import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudio } from '../../../actions';
import { Link } from 'react-router-dom';
import Title from '../../assets/Title'
import Wrapper from './sub_components/Wrapper'
import Carousel from './sub_components/Carousel'
import Features from './sub_components/Features'
import Ameneties from './sub_components/Ameneties';
import Reviews from './sub_components/Reviews'
import BreadCrumb from './sub_components/BreadCrumb'


const Studios = ({studioName, price, guest, rules, id, image, availibility}) => {
  return ( 
  <Wrapper>
      
            <div className="row">
                <div className="col-12 col-lg-8">
                
                  <Carousel img={image}/>
                   <Features />
                   <Ameneties />
                   <Reviews />
                 
                    
</div>
                <div className="col-12 col-lg-4">
                
                    <div className="hotel-reservation--area mb-100">
                    <p><Link to={`/payment/${id}`} className="btn btn-primary py-3 px-5">Book</Link></p>
                    </div>
                </div>
            </div>
            </Wrapper>
 
//         <Title header={studioName}/>  
//     <div className="col-md-7">
//     <img className="image img" src={`${image}`} width="100%" height="400px"/>
// </div>
//       <div className="col-md-4">
  
//         <div className="price" style={{margin: 50}}><h2>
//           <sup>$</sup><span className="number3">{price}</span>
//           <sub>/per hour</sub>
//           </h2>
//         <h5>Availible Studio Times</h5>
//         {availibility.map(a =>{
//           return (a.day +': '+a.starttime +' '+a.endtime)
//         })}


//         <p><Link to={`/payment/${id}`} className="btn btn-primary py-3 px-5">Book</Link></p>

// </div>
//     </div>


//   </div>  

    
)
}





class SingleStudio extends Component {



componentDidMount(){
    this.props.fetchStudio()

}


  render() {
      if (!this.props.studio) {
          return ''
      }
      //Needs to be refactored
      //Pulling in all data 
      const { studio } = this.props
      console.log(studio)
    return (<div>
     {studio.map(studio=>{
          if(this.props.match.params.id === studio._id){
            return (<BreadCrumb  studioName={studio.studioName} price={studio.price}/>)
          }
     })}
 

      <div className="container">
    <div className="row">
    	{studio.map(studio=>{
            if(this.props.match.params.id === studio._id){
            return ( 
            <Studios 
            studioName={studio.studioName} 
            price={studio.price}
            rules={studio.rules}
            guest={studio.guest}
            id={studio._id}
            image={studio.studioImage}
            availibility ={studio.availibility}
             />
            
        )
    }
    else{
        return ''
    }
        })}
        </div>
        </div>
        </div>
    );
  }
}



function mapStateToProps({ studio }) {
    return { studio };
  }
  
  export default connect(mapStateToProps, { fetchStudio})(SingleStudio);

