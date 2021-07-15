import React from 'react';
import Post from '../../models/post.model';
import DogImageComponent from '../dog/dogimage.component';
import { Card } from './preview.component.style';

type Props = {
    post: Post;
};

export default function PreviewComponent(props: Props) {  
    return (<>
        <Card>     
            <div> {props.post.id} </div>
            <div> {props.post.title} </div>
            <div> {props.post.excerpt} </div>
            <div> <DogImageComponent/> </div>
        </Card>
    </>);
}
