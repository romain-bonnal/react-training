import React, { useEffect, useState } from 'react';
import Post from '../../models/post.model';
import PreviewComponent from '../preview/preview.component';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


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
    
     const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1>Liste des articles</h1>
                <Button onClick={onclickAdd}>Ajouter un Post</Button>
            </Grid>
            <Grid item xs={12}>
                { posts.map(post => (
                    <PreviewComponent post={post}/>
                ))}
            </Grid>
        </Grid>
        </div>
    );
    
}
