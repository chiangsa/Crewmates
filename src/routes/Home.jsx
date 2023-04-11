import React from "react";
import crewImage from "../images/crewmates.jpg"

const Home = () => {

    return (
        <div>
            <h1>Welcome! Create Your Crew!</h1>
            <img className="crewImage" src={crewImage}></img>
        </div>
    )
}

export default Home;