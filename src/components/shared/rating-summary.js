import {Box, Grid, Rating, Stack, Typography} from "@mui/material";
import RatingLine from "./rating-line";

const RatingSummary = ({rating}) => {
    return (
        <Box>
            <Grid container={true} spacing={2}>
                <Grid item={true} xs={12} md={4}>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h1" sx={{color: 'text.primary'}}>
                            {rating?.average}
                        </Typography>
                        <Rating
                            precision={0.1}
                            readOnly={true}
                            value={rating?.average}
                            size="small"
                        />
                        <Typography variant="body1" sx={{color: 'text.primary'}}>
                            {rating?.count}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item={true} xs={12} md={8}>
                    <Stack direction="column">
                        <RatingLine title={5} percentage={rating?.details?.five}/>
                        <RatingLine title={4} percentage={rating?.details?.four}/>
                        <RatingLine title={3} percentage={rating?.details?.three}/>
                        <RatingLine title={2} percentage={rating?.details?.two}/>
                        <RatingLine title={1} percentage={rating?.details?.one}/>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default RatingSummary;