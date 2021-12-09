import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./Signup.js";
import Login from "./Login.js";
import "antd/dist/antd.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";

function App() {
  return (
    <>
    <Login />
    < Home />
    <Signup />
    </>
  );
}

export default App;
