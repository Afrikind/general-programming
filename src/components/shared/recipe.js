import {Box, Card, CardContent, CardMedia, Chip, Grid, Typography} from "@mui/material";

const Recipe = ({recipe}) => {
    return (
        <Card elevation={0} sx={{height: '100%'}}>
            <Box sx={{position: 'relative'}}>
                <CardMedia component="img" src={recipe.image} sx={{height: 250}}/>
                <Box
                    sx={{position: 'absolute', zIndex: 2, top: 0, right: 0}}>
                    <Typography variant="h6" sx={{}}>
                        Shop Now
                    </Typography>
                </Box>
            </Box>
            <CardContent>
                <Typography variant="h6" sx={{color: 'text.primary'}}>{recipe.name}</Typography>
                <Box sx={{mb: 1}}>
                    <Grid container={true} spacing={1}>
                        {recipe.ingredients.map((ingredient, index) => {
                            return (
                                <Grid key={index} item={true}>
                                    <Chip label={ingredient}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
                <Typography variant="body1" sx={{color: 'text.secondary'}}>{recipe.duration}</Typography>
            </CardContent>
        </Card>
    )
}

export default Recipe;
