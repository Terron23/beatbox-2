import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Carousel extends Component {
constructor(){
  super();
  this.state={
    images:[]
  }
}
componentDidMount(){
  let images =[];

  let arr = this.props.thumbnails.forEach(img=>{
    images.push({original: img, thumbnail: img}
      )
    });
      this.setState({images})
}


  
    render() {
      const images = this.state.images;
      let {width} = this.props;
    
      return (

        <ImageGallery 
        items={images} 
        originalClass="img-responsive" 
        lazyLoad={true} 
        showBullets={true}
        showThumbnails={width < 1000 ? false : true}
        showFullscreenButton={false}
        showFullscreenButton={false}
        showNav={width < 1000 ? true : false}
        />

      );
    }
  }