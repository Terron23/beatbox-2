import React, { Component } from "react";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios'
 
const StudioDropZone = ({studioid, studioname, history}) => {
  // specify upload params and url for your files
 const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files) => { 
    files.forEach((file, i) => {
      let formData = new FormData();
      formData.append("file", file.file);
      formData.append("upload_preset", "nyv0ihyq");
      formData.append("folder", studioname+'_'+studioid);
      formData.append("public_id", file.file.name+'_'+studioname+'_'+studioid);
console.log("test", file.file, files, formData)
      axios
        .post(`https://api.cloudinary.com/v1_1/etlt/image/upload`, formData)
        .then(cloudResponse => {
          let studioImageSecondary = cloudResponse.data.url;
          axios
            .post("/api/post-images", {
              studioid, studioname,
              studioImageSecondary
            })
            .then(res => {
              if(i === files.length-1){
                history.push(`/availibility/${studioname}/${studioid}`);
              }
            });
        })
        .catch(err => console.log(err));
    });}
 
  return (
    <Dropzone
     
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
  )
}

export default StudioDropZone