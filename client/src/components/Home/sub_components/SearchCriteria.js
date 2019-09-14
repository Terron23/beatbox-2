import React, {Component} from 'react';

const SearchCriteria =({title, type})=>{
    return( <div className="col-6 col-md-2 col-lg-3">
    <label htmlFor={title}>{title.toUpperCase()}</label>
    <select name={title} id={title} className="form-control">
    <option value="">All Studios</option>
        <option value="Recording - Music">Recording - Music</option>
        <option value="Podcast">Podcast</option>
        <option value="Dance">Dance</option>
        <option value="Photography">Photography</option>
        <option value="Art">Art</option>
       
    </select>
  </div>)
  }

  export default SearchCriteria