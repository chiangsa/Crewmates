import React, {useState, useEffect} from "react";
import { supabase } from '../client'
import CrewmatePreview from "../components/CrewmatePreview";

const Gallery = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: true });

            setPosts(data);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Gallery of Crewmates</h1>
            {posts.map((post) => (
                <CrewmatePreview
                    id={post.id}
                    name={post.name}
                    speed={post.speed}
                    color={post.color}
                />
            ))}
        </div>
    )
}

export default Gallery;