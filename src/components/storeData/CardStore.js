import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardStore = ({ name, imageUrl, idx, description, location }) => {
    const clickHandler = () => {
        console.log(idx)
    }
    return (
        <Card sx={{ maxWidth: 800, margin: "10px", minWidth: 300 }} >
            <CardMedia
                sx={{ height: 200, width: 400 }}
                image={imageUrl}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name} ({location})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" variant='contained' onClick={clickHandler}>Go To {name}</Button>
            </CardActions>
        </Card>
    );
}

export default CardStore;