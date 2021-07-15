import React, { useEffect, useState } from 'react';
import Post from '../models/post.model';
import PreviewComponent from './preview.component';
import DebugComponent from './debug.component';

export default function ListComponent(): JSX.Element {

    // Exo 1 from const
    // const posts: Post[] = [
    //     new Post({id:1, title:"React", excerpt:"test", content:"blabla", imageURI:""}),
    //     new Post({id:2, title:"FAQU", excerpt:"test", content:"Lorem ipsum dolor", imageURI:""}),
    // ];

    // Exo 2 from API
    const [posts, setPosts] = useState<Post[]>([]);

    // Chargement des post depuis l'API
    useEffect( () => {
        (async () => {
            const req = await fetch("https://riac.codein.fr/api/posts", {
                method: "GET",
            });

            const body = (await req.json()) as never;
            
            const posts = (body["hydra:member"] as []).map((data) => new Post(data))

            setPosts(posts);
        })();
    }, []);
    
    // Ajouter un post 
    const onclickAdd = () => {
        setPosts([
             ... posts,    
             new Post ({id:1, title:"React", excerpt:"test", content:"blabla", imageURI:""})
        ]); 
     };
    
    return (
        <>
            <button onClick={onclickAdd}>Ajouter un Post</button>
            <h2>Liste des articles</h2>
            <table>
            <tr><th>Id</th><th>Title</th><th>Excerpt</th><th>Image</th></tr>
            { posts.map(post => (
                <tr><PreviewComponent post={post}/></tr>
                ))}
            </table>
        </>
    );
}
