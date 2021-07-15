import React from 'react';
import Post from '../models/post.model';

type Props = {
    post: Post;
};

export default function PreviewComponent(props: Props) {  
    return (<>
        <td> {props.post.id} </td>
        <td> {props.post.title} </td>
        <td> {props.post.excerpt} </td>
        <td> {props.post.imageURI} </td>
    </>);
}
