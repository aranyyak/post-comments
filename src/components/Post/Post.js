import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

const Post = ({post}) => {
    const {title, id} = post;
    return (
        <div >
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                     {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={'/details/'+id}>
                        <Button size="small">See Details</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;