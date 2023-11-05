import { useState } from "react";
import axios from "axios";

function PostData() {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')

  const handleChange = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
    
  }

  const handleApi = (e) => {
    
    const url = "https://uploadimage-t8wr.onrender.com/"
    const formData = new FormData()
    formData.append('file', image)
    formData.append('name', name)
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert('success')
    })
  }

  return (
    <div>
     <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /> <br />
     <input type="file" onChange={handleChange} /> <br />
      <button onClick={handleApi} >SUBMIT</button>
    </div>
  );
}

export default PostData;