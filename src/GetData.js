import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
function GetData()
{
    const [data1,setData]=useState([])
   useEffect(()=>
   {
    fetch("https://uploadimage-t8wr.onrender.com/").then((result)=>{
        // console.log(result)
        result.json().then((data)=>
        {

         setData(data)
        })
     })
   },[])
    return(
        <div>
           <Table striped bordered hover variant="dark">
            <tbody>
                <tr>
                  
                    <td>Name</td>
                    <td>Image</td>
                </tr>
                {
                    
                    data1.map((item,k)=>
                      
                        <tr key={k}>
                        <td>{item.name}</td>  
                       
                        <td><img src={item.image} width="200px" height="200px"/></td>
                      </tr>  
                    )
                }
            </tbody>
           </Table >
        </div>
    )
}
export default GetData
   
