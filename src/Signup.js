import React,{useState} from "react";
import "./Signup.css";
import Login from "./Login.js";
// import {AppleOutlined,AndroidOutlined } from 'antd/dist/antd.css';
function Signup() {

    const [email, setEmail] = useState(" ");
    const [passLog, setPassLog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem(("user").JSON.parse(passLog));
        console.log(pass);
        let mail = localStorage.getItem(("user").JSON.parse(email));
    console.log(mail);
        

        if (!email || !passLog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passLog !== pass) || (email !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

  return (
    <>
      <form onSubmit={handleLogin} className="Form">
        <div className="main">
          <div className="container"></div>
          <div className="form-field">
            <div className="signup-header">
              <h3 style={{color: 'white',fontSize: "18px", marginLeft: "20px" }}>
                Log In Now
              </h3>
            </div>
            <div className="input-field">
              <input
                style={{ height: "50px", borderBottom: "2px solid grey" }}
                type="text"
                className="form-control"
                autocomplete="off"
                placeholder=" User Name"
                onChange={(event) => setEmail(event.target.value)}
              />
              <br></br>

              <input
                style={{ height: "50px", borderBottom: "2px solid grey" }}
                type="text"
                className="form-control"
                autocomplete="off"
                placeholder="Email"
                required
                onChange={(event) => setEmail(event.target.value)}
                
              />

              <br />

              <input
                style={{ height: "50px", borderBottom: "2px solid grey" }}
                type="password"
                className="form-control"
                autocomplete="off"
                placeholder="Password"
                required
                onChange={(event) => setPassLog(event.target.value)}
              />
              <br />
              <button
                style={{ width: "100%" }}
                 type="submit"
                class="btn btn-secondary btn-lg"
              >
                Login
              </button>
            </div>

            <div className="terms" style={{color:"white",fontSize:"1rem",fontWeight:"bold", display:"flex",justifyContent:"center",marginTop:"1rem",marginLeft: "40px" }}>
              By signing up to agree to the   <p style={{color: "blue",marginLeft: "0.5rem"}}> Terms of Services</p>
            </div>
          
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
