import React, { useState } from 'react'

const ResetPass = () => {

   
    const [password, setPassword] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();

        console.log(password);
            }

  return (
    <div className='form-page'>
       <form onSubmit={handleSubmit}> 
        <h3>Change Password Here...</h3>

        <div className="mb-3">
          <label>New Passsword</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label> Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder=" Re-Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

       

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          
          </button>


        </div>
        
        <p className="forgot-password text-right">
          Signup Page <a href="/sign-up">click here..?</a>
        </p>
      </form>

    </div>
  )
}

export default ResetPass
