import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Menu,
    MenuItem,
    Rating,
    Stack,
    Typography
} from "@mui/material";
import moment from "moment";
import {UTILS} from "../../utils/utils";
import {Flag, MoreHoriz} from "@mui/icons-material";
import {useState} from "react";
import {red} from "@mui/material/colors";

const Review = ({review}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const handleMenuOpen = event => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpen(false);
    }

    return (
        <Card
            elevation={1}
            sx={{
                borderTopRightRadius: 16,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 16,
                borderTopLeftRadius: 16,
                height: '100%'
            }}>
            <CardHeader
                title={
                    <Typography
                        variant="body1"
                        sx={{color: 'text.primary'}}>
                        {review.user.fullName}
                    </Typography>}
                subheader={
                    <Typography
                        variant="body2"
                        sx={{color: 'text.secondary'}}>
                        {moment(review.createdAt).fromNow()}
                    </Typography>
                }
                avatar={
                    <Avatar sx={{backgroundColor: 'light.secondary', borderRadius: '25%'}}>
                        <Typography
                            sx={{color: 'secondary.main'}}
                            variant="h6">
                            {UTILS.getInitials(review.user.fullName)}
                        </Typography>
                    </Avatar>
                }
                action={
                    <MoreHoriz
                        sx={{cursor: 'pointer', color: 'text.secondary'}}
                        onClick={handleMenuOpen}
                    />
                }
            />
            <Divider variant="fullWidth" light={true}/>
            <CardContent>
                <Box sx={{mb: 1}}>
                    <Rating
                        readOnly={true}
                        precision={0.1}
                        value={review.rating}
                        size="medium"
                    />
                </Box>
                <Typography
                    variant="body1"
                    sx={{color: 'text.secondary', mb: 2}}>
                    {review.text}
                </Typography>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        Was this review useful?
                    </Typography>
                    <Stack spacing={1} direction="row" alignItems="center">
                        <Button
                            size="small"
                            variant="outlined"
                            sx={{
                                color: 'text.secondary',
                                textTransform: 'capitalize',
                                borderTopRightRadius: 16,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 16,
                                borderTopLeftRadius: 16,
                            }}>
                            Yes
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            sx={{
                                color: 'text.secondary',
                                textTransform: 'capitalize',
                                borderTopRightRadius: 16,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 16,
                                borderTopLeftRadius: 16,
                            }}>
                            No
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>

            <Menu
                elevation={1}
                sx={{
                    borderTopRightRadius: 16,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 16,
                    borderTopLeftRadius: 16,
                }}
                open={open}
                onClose={handleMenuClose}
                anchorEl={anchorEl}>
                <MenuItem>
                    <Button
                        size="large"
                        sx={{
                            color: 'text.primary',
                            borderTopRightRadius: 16,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 16,
                            borderTopLeftRadius: 16,
                            textTransform: 'capitalize'
                        }}
                        startIcon={<Flag sx={{color: red[400]}}/>}>
                        Flag as inappropriate
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button
                        size="large"
                        sx={{
                            borderTopRightRadius: 16,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 16,
                            borderTopLeftRadius: 16,
                            color: 'text.primary',
                            textTransform: 'capitalize'
                        }}
                        startIcon={<Flag sx={{color: red[400]}}/>}>
                        Flag as spam
                    </Button>
                </MenuItem>
            </Menu>
        </Card>
    )
}

export default Review;