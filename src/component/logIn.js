import React from 'react';
import { useState } from 'react';

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();

        console.log(email,password);
        fetch("http://localhost:5000/api/login",{
            method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        }, body: JSON.stringify({
            
            email,
            password,
          }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"user login");
           
             if(data.status ==="ok"){
                alert("User Login  Successfully...!")
                window.localStorage.setItem("token",data.data)
            }else{
                alert("Something went wrong");
             }

        })
    }

  return (
    <div className='form-page'>
       <form onSubmit={handleSubmit}> 
        <h3>Log-In Here....</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

       

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          
          </button>


        </div>
        
        <p className="forgot-password text-right">
          forget Password <a href="/for-pass">click here..?</a>
        </p>
      </form>

    </div>
  )
}

export default LogIn
