import { useState } from "react";
import axios from "axios";

function PostData() {
  const [pid, setId] = useState('')
  const [pname, setName] = useState('')
  const [pdesc, setDesc] = useState('')
  const [pprice, setPrice] = useState('')
  const [pimage, setImage] = useState('')
 

  const handleChange = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
    
  }

  const handleApi = (e) => {
    
    const url = "https://uploadimage-t8wr.onrender.com/"
    const formData = new FormData()
    formData.append('pid', parseInt(pid))
    formData.append('pname', pname)
    formData.append('pdesc', pdesc)
    formData.append('pprice', parseInt(pprice))
    formData.append('pimage', pimage)
   
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert('success')
    })
  }

  return (
    <div>
      <input type="number" placeholder="Product Id" onChange={(e)=>setId(e.target.value)} /> <br />
     <input type="text" placeholder="Product Name" onChange={(e)=>setName(e.target.value)} /> <br />
     <input type="text" placeholder="Product Description" onChange={(e)=>setDesc(e.target.value)} /> <br />
     <input type="number" placeholder="Product Price" onChange={(e)=>setPrice(e.target.value)} /> <br />
     <input type="file" onChange={handleChange} /> <br />
      <button onClick={handleApi} >SUBMIT</button>
    </div>
  );
}

export default PostData;