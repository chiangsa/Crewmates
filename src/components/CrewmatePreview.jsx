import React from "react";
import blankCrewmateImage from "../images/blankCrewmateT.png"
import { useNavigate } from "react-router-dom";

const CrewmatePreview = ({id, name, speed, color}) => {
    
    const navigate = useNavigate();

    const crewmateStyle = {
        color: color,
        boxShadow: "0px 0px 20px currentColor"
    };

    const handleClick = () => {
        navigate(`/crewmate/${id}`);
    }

    return (
        <div className="crewmatePreview" onClick={handleClick}>
            <h4>Name: {name}</h4>
            <img className="blankCrewmate" src={blankCrewmateImage} style={crewmateStyle}/>
            <p>
                Speed {speed}
                {"\n"}
                Color: {color}
            </p>
        </div>
    )
}

export default CrewmatePreview;
