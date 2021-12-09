import React from "react";
import { Link } from "react-router-dom";
// import  "./image.jpg"
function Home() {
  return (
    <div
      className="home"
      style={{ margin: "20%", backgroundColor: "lightgreen" }}
    >
      {/* <img src={"./image.jpg"}/> */}
      <div className="left" style={{ marginLeft: "0%", marginTop: "5rem" }}>
        <div
          className=" btn"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button type="button" class="btn btn-outline-primary">
            Sign in
          </button>
          <br></br>
          <button
            style={{ marginLeft: "5px" }}
            type="button"
            class="btn btn-outline-primary"
          >
            Login
          </button>
        </div>
      </div>

      <div className="right"></div>
    </div>
  );
}

export default Home;
