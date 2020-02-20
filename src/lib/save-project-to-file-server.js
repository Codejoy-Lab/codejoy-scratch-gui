import axios from 'axios';

export default (filename, blob) => {
   
    const formData = new FormData();
    formData.append("file", blob);
    formData.append("filename", filename);
    // formData.append("userName", "admin");
    
    axios.post("http://0.0.0.0:3000/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "withCredentials": true
    }
  })
  .then((res) => {
    console.log("succeed");
    
    console.log(res.data);
  });
};
