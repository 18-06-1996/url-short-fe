import React, { useState } from 'react'
import { UNSAFE_DataRouterStateContext } from 'react-router-dom';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
   

    const handleSubmit =(e)=>{
        e.preventDefault();

        console.log(email);
        fetch("http://localhost:5000/api/forget-password",{
            method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        }, body: JSON.stringify({
            
            email,
            
          }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"user login");
            if(data.message ==="User Login Successfully..!!"){
                alert("User Login  Successfully...!")
            }else{
                alert("Something went wrong");
            }

        })
    }

  return (
    <div className='form-page'>
       <form onSubmit={handleSubmit}> 
        <h3>Forgot password....</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}

       

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
          <a href="/reset-pass" style={{color:"whitesmoke"}}>   Submit  </a>
          
          </button>


        </div>
        
        <p className="forgot-password text-right"> go to signup page...
         <a href="/sign-up">  click here..?</a>
        </p>
      </form>

    </div>
  )
}

export default ForgotPassword
