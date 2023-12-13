import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export const BluuCard = () => {
  return (
    <Card>
        <CardActionArea>
            <CardMedia
                component="img"
                image='https://via.placeholder.com/1000x200'
                height={200}
                alt='descripcion'
            />
            <CardContent>
                <Typography variant='h5'>
                    Card Title
                </Typography>

                <Typography component="p" variant='body2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laboriosam nemo perferendis culpa fuga animi enim magni nam consectetur, rerum impedit. Dolore doloribus voluptatem rem officia, vitae harum perferendis natus.
                </Typography>
            </CardContent>
        </CardActionArea>
        
        <CardActions>
            <Button variant='contained'> Add </Button>
            <Button color='error'> Remove </Button>
        </CardActions>
    </Card>
  )
}
