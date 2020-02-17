import axios from 'axios';

export default (filename, blob) => {
    // const downloadLink = document.createElement('a');
    // document.body.appendChild(downloadLink);

    // // Use special ms version if available to get it working on Edge.
    // if (navigator.msSaveOrOpenBlob) {
        // navigator.msSaveOrOpenBlob(blob, filename);
        // return;
    // }

    // const url = window.URL.createObjectURL(blob);
    // downloadLink.href = url;
    // downloadLink.download = filename;
    // downloadLink.click();
    // window.URL.revokeObjectURL(url);
    // document.body.removeChild(downloadLink);
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
