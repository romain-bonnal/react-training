import React, { useEffect, useState } from 'react';
import Post from '../../models/post.model';
import PreviewComponent from '../preview/preview.component';
import { Title, Button } from './list.component.style';


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
            <Button onClick={onclickAdd}>Ajouter un Post</Button>
            <Title>Liste des articles</Title>
            { posts.map(post => (
                <PreviewComponent post={post}/>
            ))}
        </>
    );
}
