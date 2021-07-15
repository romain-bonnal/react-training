import React from 'react';
import Post from '../../models/post.model';
import DogImageComponent from '../dog/dogimage.component';
// import { Card } from './preview.component.style';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom: "10px",
    },
  });

type Props = {
    post: Post;
};

export default function PreviewComponent(props: Props) {  
    const classes = useStyles();

    return (<>

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={props.post.imageURI}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {props.post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.post.excerpt}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Voir
                </Button>
                <Button size="small" color="primary">
                Supprimer
                </Button>
            </CardActions>
        </Card>
    </>);
}
