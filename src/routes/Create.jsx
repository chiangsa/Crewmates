import React, { useState } from "react";
import { supabase } from "../client";

const Create = () => {
    const [name, setName] = useState("");
    const [speed, setSpeed] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .insert({ name: name, speed: speed, color: color })
            .select();

        window.location = "/";
    }

    return (
        <div>
            <h1>Create a Crewmate</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Speed (mph):
                    <input
                        type="text"
                        value={speed}
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
                        checked={color === "red"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Red
                    <input
                        type="radio"
                        name="color"
                        value="blue"
                        checked={color === "blue"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Blue
                    <input
                        type="radio"
                        name="color"
                        value="green"
                        checked={color === "green"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Green
                    <input
                        type="radio"
                        name="color"
                        value="orange"
                        checked={color === "orange"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Orange
                    <input
                        type="radio"
                        name="color"
                        value="white"
                        checked={color === "white"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    White
                    <input
                        type="radio"
                        name="color"
                        value="black"
                        checked={color === "black"}
                        onChange={(event) => setColor(event.target.value)}
                    />
                    Black
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default Create;