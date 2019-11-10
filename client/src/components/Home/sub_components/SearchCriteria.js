import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStudioType} from '../../../actions';



class SearchCriteria extends Component{


    componentDidMount(){
        this.props.fetchStudioType()
    }


    render(){
        if(!this.props.studiotype){
            return 'Loading'
        }
        let {col, title, name, studiotype}=this.props;
    return( <div className="col-6 col-md-2 col-lg-3">
    <label htmlFor={title}>{title.toUpperCase()}</label>
    <select name={name} id={title} className="form-control">
    <option value=''>All Studios</option>
    {studiotype.map(m=><option value={m._id}>{m.studioType}</option>)}
    </select>
  </div>)
    }
  }



function mapStateToProps({studiotype}) {
    return { studiotype};
  }
  
  export default connect(mapStateToProps, {  fetchStudioType })(SearchCriteria);

