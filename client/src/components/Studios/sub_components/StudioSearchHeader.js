import React, {Component} from 'react';
import bg1 from '../../../images/bg-img/59.jpg';
import { Link } from 'react-router-dom';


const StudioSearchHeader =({})=>{

    return(
    
    <div class="breadcrumb-area bg-img bg-overlay jarallax" style={styles.bg1}>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12">
                <div class="breadcrumb-content text-center">
                    <h2 class="page-title">Our Studios</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Studios</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>)
    }
  

const styles={
bg1:{
    "backgroundImage": `url(${bg1})`
}
}
  export default StudioSearchHeader

