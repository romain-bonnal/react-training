import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import Post from '../../models/post.model';

type Params = {
    id: string;
}

export default function FullComponent(): JSX.Element {

    const { id } = useParams<Params>();

    const [post, setPost] = useState<Post>();

    // Chargement des post depuis l'API
    useEffect( () => {
        (async () => {
            const req = await fetch("https://riac.codein.fr/api/posts/" + id, {
                method: "GET",
            });

            const body = (await req.json()) as never;
            
            console.log(body);
            const post = new Post(body);

            setPost(post);
        })();
    }, []);

    return <> 
        Id : {post && <>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.content}</div>
        </>}
    </>;
    
}
