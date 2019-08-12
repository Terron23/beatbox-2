import React, { Component } from 'react';
import SearchCriteria from './SearchCriteria';
import TimeDropDown from './TimeDropDown';
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
    <div className="form-group mb-30">
            <label for="checkInDate">Location</label>
            <div className="input-daterange" id="datepicker">
                <div className="row no-gutters">
                    <div className="col-12">
                        <input type="text" 
                        defaultValue={location}
                        className="input-small form-control" id="checkInDate" name="location" 
                        placeholder="City or Zip" />
                    </div>
                   
                </div>
            </div>
        </div>


        <div className="form-group mb-30">
            
            <div className="input-daterange" id="datepicker">
                <div className="row no-gutters">
                    
                   
                        
      

<SearchCriteria title="Studio Type"  dropVal={studioType} name="studioType" col='12'/>
 

               
       
                </div>
            </div>
        </div>
        <div className="form-group mb-30">
            <label for="checkInDate">Check In Date</label>
            <div className="input-daterange" id="datepicker">
                <div className="row no-gutters">
                <div class="row">
                    <div className="col-md-12">
                       
                    <DatePicker 
                           selected={startDate}
                           onChange={handleChangeStart}
                           className="form-control" name="startDate" 
                           style={{"width":"1000px"}}
                          />
                    </div>

                 
                </div>
                </div>
            </div>
        </div>
   

    
        <div className="form-group mb-30">
<a className="" onClick={this.reveal}>Advanced Filters</a>
 
</div>
<section className={ active === true ? '' :'d-none'}>
        <div className="form-group mb-30">
            
            <div className="input-daterange" id="datepicker">
                <div className="row no-gutters">
                    
                    <TimeDropDown col="col-6" label="Time In" name="timein"/>
                   
 

                    <TimeDropDown col="col-6" label="Time Out" name="timeout"/>
       
                </div>
            </div>
        </div>

           
        <div className="form-group mb-30">
           
            <div className="row">
           
            <SearchCriteria title="Guest" dropVal={group} name="guest"/>
            </div>
        </div>
        
        <div className="form-group mb-50">
            <div className="slider-range">
                <div className="range-price">Max Price: ${priceLow} - ${priceHigh}</div>
                <div data-min="0" data-max="3000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="3000" data-label-result="Max Price: ">
                    <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                </div>
            </div>
        </div>
        </section>
        <div className="form-group">
            <button type="submit" className="btn roberto-btn w-100">Check Available</button>
        </div>
    </form>
</div>
</div>)
   }
}

export default StudioSideFilter;