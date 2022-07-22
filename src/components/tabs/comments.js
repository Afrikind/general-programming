import {Box, Button, Grid, Stack} from "@mui/material";
import Empty from "../shared/empty";
import emptyIcon from "../../assets/images/not-found.png";
import Comment from "../shared/comment";

const Comments = ({comments}) => {

    return (
        <Box>
            {comments?.length === 0 ? (
                <Box>
                    <Empty
                        title="No comments"
                        message="Oops looks like this shop has no comments. Be the first to comment."
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
                    {comments?.map((comment, index) => {
                        return (
                            <Grid key={index} item={true} xs={12}>
                                <Comment comment={comment}/>
                            </Grid>
                        )
                    })}
                </Grid>
            )}
        </Box>
    )
}

export default Comments;