import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [userRecord, setUserRecord] = useState([]);

  const store = localStorage.setItem("user", JSON.stringify(user));
  console.log(store);

  const handleInput = (input) => {
    const name = input.target.name;
    const value = input.target.value;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...user, id: new Date().getTime().toString() };
    setUserRecord([...userRecord, newUser]);
    console.log(userRecord);
  };
  return (
    <>
    
      <div
        className="card"
        style={{
          marginLeft: "12.5rem",
          marginTop: "5rem",
          width: "70%",
          height: "35rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "start",
        }}
      >
        <form className="form-design" action="login" onSubmit={handleSubmit}>
          <div class="form-group" style={{marginTop: '5rem'}}>
            <label for="exampleInputText">User Name</label>
            <input
            style={{borderBottom: '2px solid grey'}}
              type="text"
              class="form-control"
              id="userName"
              name="userName"
              aria-describedby="emailHelp"
              placeholder="User Name"
              required
              value={user.userName}
              onChange={handleInput}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
            style={{borderBottom: '2px solid grey'}}
              type="email"
              class="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
            style={{borderBottom: '2px solid grey'}}
              type="password"
              class="form-control"
              name="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
            style={{borderBottom: '2px solid grey'}}
              type="password"
              class="form-control"
              name="password"
              id="password"
              placeholder="Repeat Password"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <button style={{marginTop:"1rem",marginLeft:"7rem",width: '25vw'}} type="button" class="btn btn-secondary btn-lg btn-block">
            Sign in
          </button>
        </form>
         <div className="left">
        <h2 style={{fontFamily:"ubuntu",alignItems:"center",margin:"0 auto"}}>Create your account</h2>
      </div>
      </div>
      <div class="">
        {userRecord.map((curr) => {
          const [id, userName, email, password] = curr;

          return (
            <div className="dataShow" key={curr.id}>
              <p>{curr.userName}</p>
              <p>{curr.email}</p>
              <p>{curr.password}</p>
              <p>{curr.repeatPassword}</p>
            </div>
          );
        })}
      </div>
      {store}
     
    </>
  );
}

export default Login;
