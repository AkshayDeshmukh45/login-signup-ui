import React from "react";
import "./Signup.css";
// import {AppleOutlined,AndroidOutlined } from 'antd/dist/antd.css';
function Signup() {
  return (
    <>
      <section className="Form">
        <div className="main">
          <div className="container"></div>
          <div className="form-field">
            <div className="signup-header">
              <h3 style={{color: 'white',fontSize: "18px", marginLeft: "20px" }}>
                Sign Up Now
              </h3>
            </div>
            <div className="input-field">
              <input
                style={{ height: "50px", borderBottom: "2px solid grey" }}
                type="text"
                className="form-control"
                autocomplete="off"
                placeholder=" User Name"
              />
              <br></br>

              <input
                style={{ height: "50px", borderBottom: "2px solid grey" }}
                type="text"
                className="form-control"
                autocomplete="off"
                placeholder="Email"
                required
              />

              <br />

              <input
                style={{ height: "50px", borderBottom: "2px solid grey" }}
                type="password"
                className="form-control"
                autocomplete="off"
                placeholder="Password"
                required
              />
              <br />
              <button
                style={{ width: "100%" }}
                type="button"
                class="btn btn-secondary btn-lg"
              >
                Sign Up
              </button>
            </div>

            <div className="terms" style={{color:"white",fontSize:"1rem",fontWeight:"bold", display:"flex",justifyContent:"center",marginTop:"1rem",marginLeft: "40px" }}>
              By signing up to agree to the   <p style={{color: "blue",marginLeft: "0.5rem"}}> Terms of Services</p>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
