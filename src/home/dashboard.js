import {Link} from "react-router-dom";

import "../App.css";
export default function Dashboard(){
    return <>
        <div className="top-wrapper">
        <div className="top-left-wrapper">
          
            <h1 className="brandname">URL Shortner</h1>
        </div>
        <div className="top-right-wrapper">
        <div className="right-elements">
                <Link to="sign-in"><button className="create-button" style={{color:"blue",backgroundColor:"white",marginBottom:"20px"}}>Login</button></Link>
                <Link to="sign-up"><button className="create-button" style={{color:"blue",backgroundColor:"white"}}>Sign-in</button></Link>
                <Link to="url"><button className="create-button" style={{color:"blue",backgroundColor:"white"}}>Url short</button></Link>

            </div>
        </div>
     </div>  
        <div style={{textAlign:"center"}}>
            
            <img src="https://miro.medium.com/max/566/1*j3xVt5zsYuAB19-QATkk_w.png" alt="URL shortner" className="homeimage"></img>
            <br></br>
            <h4>A URL shortener built with powerful tools to help you grow and protect your brand.</h4>
                   </div>
    </>
}