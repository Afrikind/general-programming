import {Avatar, Button, Card, CardContent, CardHeader, Divider, Menu, MenuItem, Typography} from "@mui/material";
import moment from "moment";
import {UTILS} from "../../utils/utils";
import {Flag, MoreHoriz} from "@mui/icons-material";
import {useState} from "react";
import {red} from "@mui/material/colors";

const Comment = ({comment}) => {

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
            elevation={0}
            sx={{
                borderTopRightRadius: 32,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 32,
                height: '100%'
            }}>
            <CardHeader
                title={
                    <Typography
                        variant="body1"
                        sx={{color: 'text.primary'}}>
                        {comment?.user?.fullName}
                    </Typography>}
                subheader={
                    <Typography
                        variant="body2"
                        sx={{color: 'text.secondary'}}>
                        {moment(comment?.createdAt).fromNow()}
                    </Typography>
                }
                avatar={
                    <Avatar sx={{
                        backgroundColor: 'light.secondary',
                        borderTopRightRadius: 32,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 32,
                        borderTopLeftRadius: 32
                    }}>
                        <Typography
                            sx={{color: 'secondary.main'}}
                            variant="h6">
                            {UTILS.getInitials(comment.user.fullName)}
                        </Typography>
                    </Avatar>
                }
                action={
                    <MoreHoriz
                        sx={{
                            cursor: 'pointer',
                            backgroundColor: 'light.secondary',
                            color: 'secondary.main',
                            borderTopRightRadius: 32,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 32,
                            borderTopLeftRadius: 32
                        }}
                        onClick={handleMenuOpen}
                    />
                }
            />
            <Divider variant="fullWidth" light={true}/>
            <CardContent>
                <Typography
                    variant="body2"
                    sx={{color: 'text.secondary'}}>
                    {comment?.text}
                </Typography>
            </CardContent>

            <Menu
                elevation={1}
                sx={{
                    borderTopRightRadius: 32,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 32,
                    borderTopLeftRadius: 32,
                }}
                open={open}
                onClose={handleMenuClose}
                anchorEl={anchorEl}>
                <MenuItem>
                    <Button
                        size="large"
                        sx={{
                            color: 'text.primary',
                            borderTopRightRadius: 32,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 32,
                            borderTopLeftRadius: 32,
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
                            borderTopRightRadius: 32,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 32,
                            borderTopLeftRadius: 32,
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

export default Comment;