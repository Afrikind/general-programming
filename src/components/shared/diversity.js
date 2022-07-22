import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material"

const Diversity = ({food}) => {
    return (
        <Card elevation={0} sx={{position: 'relative', height: 400, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <CardMedia
                src={food.image}
                component="img"
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    left: 0, right: 0, top: 0, bottom: 0,
                    zIndex: -1
                }}/>
            <CardContent sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', padding: 2}}>
                <Stack mb={2} justifyContent="center" direction="row" spacing={2} alignItems="center">
                    <Typography variant="h5" sx={{color: 'white', fontWeight: 'bold'}}>
                        {food.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{color: 'white'}}>
                        &#8226;
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{color: 'white'}}>
                        {food.country}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Diversity;
