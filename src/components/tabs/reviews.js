import {Box, Button, Grid, Stack} from "@mui/material";
import Empty from "../shared/empty";
import emptyIcon from "../../assets/images/not-found.png";
import Review from "../shared/review";

const Reviews = ({reviews}) => {

    return (
        <Box>
            {reviews?.length === 0 ? (
                <Box>
                    <Empty
                        title="No reviews"
                        message="Oops looks like this shop has no reviews. Be the first to review."
                        button={
                            <Stack direction="row" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    size="large"
                                    color="secondary"
                                    disableElevation={true}
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32
                                    }}>
                                    Refresh
                                </Button>
                            </Stack>
                        }
                        icon={
                            <img
                                alt="Empty Icon"
                                src={emptyIcon}
                                style={{
                                    height: 150,
                                    width: 150,
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}/>}
                    />
                </Box>
            ) : (
                <Grid container={true} spacing={2}>
                    {reviews?.map((review, index) => {
                        return (
                            <Grid key={index} item={true} xs={12} md={4} lg={3}>
                                <Review review={review}/>
                            </Grid>
                        )
                    })}
                </Grid>
            )}
        </Box>
    )
}

export default Reviews;