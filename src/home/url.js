import React, { useEffect, useState } from 'react';

//import axios from 'axios'


const Url = () => {

  const [url,setUrl]=useState("");
  const [data,setData]=useState([]);

  const handleSubmit =(e)=>{
    e.preventDefault();

    
    fetch("https://url-short-5b69.onrender.com/url/shorturl",{
        method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    }, body: JSON.stringify({
        
      url,
        
      }),
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data,"url shorted");
        

    })
}


// const getData= async()=>{
//   try {
//     let res=await axios.get(`https://url-short-5b69.onrender.com/url/all`)
//     console.log(res)
//     setData(res.data)
//   } catch (error) {
//     console.log(error)
//   }
// }

useEffect(()=>{
  fetch('https://url-short-5b69.onrender.com/url/all',{
    method:"GET",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    }
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data,"shorturls");
    setData(data.data)
  });
//getData()
},[])


  return (
    <div>
    <div>
      <form onSubmit={handleSubmit} >
        <h3>url shortner</h3>
        <label>URL</label>
<input
 type='url'
 name='redirectUrl'
 id='fulurl' 
placeholder='url'
onChange={(e)=>setUrl(e.target.value)}/>
<br/><br/>
<button className='btn-btn' type='submit'>Shrink</button>

      </form> </div>
      
      <br/><br/><br/>  

<div>
      <table className='table'>
   
        <tr>
            <td>Full Url</td>
            <td>Short Url</td>
            <td>clicks</td>
        </tr>  
{
 data? data.map((e)=>{
    return <tr>(
      <td>
        {e.redirectURL}
      </td>
      <td>
        {e.shortId}
      </td>
      <td>
        {e.visitHistory}
      </td>

    )
    </tr>
  }): "error"
}


 
</table>
</div>
</div>

  )
}

export default Url
