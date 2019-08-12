import React, {Component} from 'react';

const SearchCriteria =({title, type, dropVal, name, col})=>{

    return( <div className={`col-${col}`}>
    <label htmlFor={title}>{title.charAt(0).toUpperCase() + title.slice(1)}</label>
    <select name={name} id={title} className="form-control">
    <option value=''>All Studios</option>
{dropVal.map(studio=><option value={studio}>{studio}</option>)}
       
    </select>

    </div>)
    }
  

  export default SearchCriteria

