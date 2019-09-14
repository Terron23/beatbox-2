import React, { Component } from 'react';
import SearchCriteria from './SearchCriteria';
import TimeDropDown from '../../assets/TimeDropDown';
import FormAttr from './FormAttr'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class StudioSideFilter extends Component{
    constructor(props){
        super(props);
      this.state={
        active: false
      }
      }

    

      reveal =(e)=>{
          e.preventDefault()
        if(this.state.active === false){
            this.setState({active: true})
        }
        else{
        this.setState({active: false})
        }
      }

   render(){  
       let {children, submit, priceLow, priceHigh, location, studioType, group, startDate, handleChangeStart} = this.props;
       let {active} =this.state;
       return(      
        <div className="col-12 col-lg-4">      
<div className="hotel-reservation--area mb-100">
    <form onSubmit={submit}>
                    
    <FormAttr col="12" label="Location">
    <input type="text" 
                        defaultValue={location}
                        className="input-small form-control" id="checkInDate" name="location" 
                        placeholder="City or Zip"
                        autoComplete="off"
                        />
 </FormAttr>        
                        
      <FormAttr>

<SearchCriteria title="Studio Type"  dropVal={studioType} name="studioType" col='12'/>
 </FormAttr>

     
 <FormAttr label="Check In Date">
                    <DatePicker 
                           selected={startDate}
                           onChange={handleChangeStart}
                           className="form-control" name="startDate" 
                           style={{"width":"1000px"}}
                           autoComplete="off"
                          />           
                   </FormAttr>
   

    
        <div className="form-group mb-30">
        <div className="row no-gutters">

{/* <a style={{"color": "lightgray"}} 
className="ad_filter" onClick={this.reveal}>Advanced Filters
{ active? <i class="fa fa-angle-up" aria-hidden="true"></i> : <i class="fa fa-angle-down" aria-hidden="true"></i>}
</a>  */}
 </div>
</div>

{/* <section className={ active === true ? '' :'d-none'}>



    <FormAttr label>
               
                    <TimeDropDown col="6" label="Time In" name="timeIn"/>
                   
 

                    <TimeDropDown col="6" label="Time Out" name="timeOut"/>
       
                    </FormAttr>

           
     <FormAttr>
           
            <SearchCriteria title="Guest" dropVal={group} name="guest" col="8"/>
            
            </FormAttr>
        
        <div className="form-group mb-50">
            <div className="slider-range">
                <div className="range-price">Max Price: ${priceLow} - ${priceHigh}</div>
                <div data-min="0" data-max="3000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="3000" data-label-result="Max Price: ">
                    <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                </div>
            </div>
        </div> */}
        {/* </section> */}
        <div className="form-group">
            <button type="submit" className="btn roberto-btn w-100">Check Available</button>
        </div>
    </form>
</div>
</div>)
   }
}

export default StudioSideFilter;