import React, { useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";

const Update = () => {
    const { id, name, speed, color } = useParams();
    const [name1, setName] = useState(name);
    const [speed1, setSpeed] = useState(speed);
    const [color1, setColor] = useState(color);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .update({ name: name1, speed: speed1, color: color1 })
            .eq('id', id);

        window.location = "/";
    }

    return (
        <div>
            <h1>Update a Crewmate</h1>
            <h2>Current Stats</h2>
            <h3>
                <span>Name: {name}, </span>
                <span>Speed: {speed}, </span>
                <span>Color: {color} </span>
            </h3>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name1}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Speed (mph):
                    <input
                        type="text"
                        value={speed1}
                        onChange={(event) => setSpeed(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Color:
                    <input
                        type="radio"
                        name="color"
                        value="red"
                        checked={color1 === "red"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Red
                    <input
                        type="radio"
                        name="color"
                        value="blue"
                        checked={color1 === "blue"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Blue
                    <input
                        type="radio"
                        name="color"
                        value="green"
                        checked={color1 === "green"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Green
                    <input
                        type="radio"
                        name="color"
                        value="orange"
                        checked={color1 === "orange"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Orange
                    <input
                        type="radio"
                        name="color"
                        value="white"
                        checked={color1 === "white"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    White
                    <input
                        type="radio"
                        name="color"
                        value="black"
                        checked={color1 === "black"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Black
                </label>
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Update;