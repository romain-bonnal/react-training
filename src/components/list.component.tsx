import React from 'react';
import Post from '../models/post.model';
import PreviewComponent from './preview.component';

export default function ListComponent() {
    const posts: Post[] = [
        new Post({id:1, title:"React", excerpt:"test", content:"blabla", imageURI:""}),
        new Post({id:2, title:"FAQU", excerpt:"test", content:"Lorem ipsum dolor", imageURI:""}),
    ];
    
    return (
        <>
          <h2>Liste des articles</h2>
            <table>
            <tr><th>Id</th><th>Title</th><th>Excerpt</th><th>Content</th><th>Image</th></tr>
            { posts.map(post => (
                <tr><PreviewComponent post={post}/></tr>
                ))}
            </table>
        </>
    );
}
