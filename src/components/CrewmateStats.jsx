import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from '../client'


const CrewmateStats = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);
    const navigate = useNavigate();

    const handleDelete = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .delete()
            .match({ id: id });

        window.location = "/";
    }

    function handleUpdate(id) {
        navigate(`/crewmate/update/${id}/${name}/${speed}/${color}`)
    }

    useEffect(() => {
        async function fetchCrewmate() {
            const { data, error } = await supabase
                .from("Crewmates")
                .select("*")
                .eq("id", id)
                .single();

            if (error) {
                console.log(error);
            } else {
                setCrewmate(data);
            }
        }

        fetchCrewmate();
    }, [id]);

    if (!crewmate) {
        return <div></div>;
    }

    const { name, speed, color } = crewmate;

    return (
        <div className="crewmateStats">
            <h2>Crewmate {id} Stats</h2>
            <p>Name: {name}</p>
            <p>Speed: {speed}</p>
            <p>Color: {color}</p>
            <button onClick={() => handleUpdate(id)}> Update </button>
            <button onClick={handleDelete}> Delete </button>
        </div>
    );
};

export default CrewmateStats;
