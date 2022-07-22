import {Stack, Typography} from "@mui/material";
import emptyBox from "../../assets/images/not-found.png";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/features/auth/auth-slice";

const Empty = ({title, message, button}) => {

    const {authData} = useSelector(selectAuth);

    return (
        <Stack direction="column" spacing={2} justifyContent="center">
            <Stack direction="row" justifyContent="center">
                <img
                    alt="Not found logo"
                    src={emptyBox}
                    style={{objectFit: 'cover', objectPosition: 'center', width: 250, height: 250}}
                />
            </Stack>
            <Typography align="center" variant="body1" sx={{color: 'text.primary', textTransform: 'uppercase'}}>
                {title}
            </Typography>
            <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                {message}
            </Typography>
            {authData && button}
        </Stack>
    )
}

export default Empty;