

import { useState } from "react";
import React from 'react';




const SignUp = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const [mobile, setMobile] = useState("");
    const [role, setRole] = useState("");
  
    const handleSubmit =(e)=>{
        e.preventDefault();

        console.log(name,email,password,mobile,role);
        fetch("http://localhost:5000/api/register",{
            method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        }, body: JSON.stringify({
            
            email,
            name,
            password,
            mobile,
            role,
          }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"user registred");
            if(data.message ==="User Signup Sucessfully...."){
                alert("User Signin Successfully...!")
            }else{
                alert("Something went wrong");
            }

        })
    }
  return (
    <div className='form-page'>
       <form  onSubmit={handleSubmit}>
        <h3>Sign-Up Here....</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>

        

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile Number"
            onChange={(e)=>setMobile(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Role"
            onChange={(e)=>setRole(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>

    </div>
  )
}

export default SignUp
