import React from 'react'
import { Link } from 'react-router-dom'
// import  "./image.jpg"
function Home() {
    return (
        <div className="home"style={{margin:"20%", backgroundColor: 'green'}}>
        {/* <img src={"./image.jpg"}/> */}
            <div className="left"
            style={{margin:"20% auto", backgroundColor: 'green'}}>

            </div>
            <div className=" btn" style={{display: 'flex', flexDirection:"row",justifyContent:"center"}}>
            <button type="button" class="btn btn-outline-primary">Sign in</button>
            <br></br>
            <button style={{marginLeft:"5px"}} type="button" class="btn btn-outline-primary">Login</button>
            </div>
            <div className="right">
            
            </div>
        </div>
    )
}

export default Home
