import React, {Component} from 'react';

const SearchCriteria =({title, type})=>{
    return( <div className="col-6 col-md-2">
    <label htmlFor={title}>{title.toUpperCase()}</label>
    <select name={title} id={title} className="form-control">
        <option value="01">Recording - Music</option>
        <option value="02">Podcast</option>
        <option value="03">Dance</option>
        <option value="04">Photography</option>
        <option value="05">Art</option>
       
    </select>
  </div>)
  }

  export default SearchCriteria