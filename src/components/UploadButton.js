import React,{Component, useState} from 'react'

import axios from 'axios';
 
const UploadButton = (imgsrc) => {
  // 담을 state
  const [selectedFile, setSelectedFile] = useState(null);
 
  // onChange역할
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
 
  // formData라는 instance에 담아 보냄
  const handleFileUpload = () => {
    const formData = new FormData();
 
    formData.append("userfile", selectedFile, selectedFile.name);
 
    axios.post("api/uploadfile", formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
 
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input
      type="file"
            
            onClick={handleFileChange}
            style={{
                width:"100px",
                height:"100px",
                backgroundColor:"white",
                borderRadius:'100px',
                boxShadow:'0px 2px 5px 0px gray',
                margin: '0 auto',
            }}>
                
               
            </input>
    
    </div>
  );
};
 
export default UploadButton;
