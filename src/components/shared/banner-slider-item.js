import {Box, Stack, Typography} from "@mui/material";

const BannerSliderItem = ({item}) => {

    return (
        <Box
            elevation={0}>
            <Stack mb={2} justifyContent="center" alignItems="center">
                <img
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        height: 270,
                        maxWidth: '100%',
                        width: 270,
                        borderRadius: '100%',
                    }}
                    src={item.image}
                    alt={item.name}
                />
            </Stack>
            <Typography
                align="center"
                variant="h4"
                sx={{color: 'secondary.main', fontWeight: 400, mb: 2}}>
                {item.name}
            </Typography>
            <Typography
                align="center"
                variant="body1"
                sx={{color: 'text.secondary'}}>
                {item.description}
            </Typography>
        </Box>
    )
}

export default BannerSliderItem;