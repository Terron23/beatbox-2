import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchStudio } from '../../actions';
import { Link } from 'react-router-dom';
import Title from '../assets/Title'






const Studios = ({studioName, price, guest, rules, id, image, availibility}) => {
  return ( 
    <div className="row" >
      test
        <Title header={studioName}/>  
    <div className="col-md-7">
    <img className="image img" src={`${image}`} width="100%" height="400px"/>
</div>
      <div className="col-md-4">
  
        <div className="price" style={{margin: 50}}><h2>
          <sup>$</sup><span className="number3">{price}</span>
          <sub>/per hour</sub>
          </h2>
        <h5>Availible Studio Times</h5>
        {availibility.map(a =>{
          return (a.day +': '+a.starttime +' '+a.endtime)
        })}


        <p><Link to={`/payment/${id}`} className="btn btn-primary py-3 px-5">Book</Link></p>

</div>
    </div>


  </div>  

    
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
      const { studio } = this.props
      console.log(studio)
    return (<div className="container-fluid">
     
    <div className="site-section bg-light">
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
      </div>
    );
  }
}



function mapStateToProps({ studio }) {
    return { studio };
  }
  
  export default connect(mapStateToProps, { fetchStudio})(SingleStudio);

