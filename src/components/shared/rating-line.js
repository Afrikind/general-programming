import {Slider, Stack, Typography} from "@mui/material";

const RatingLine = ({title, percentage}) => {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h6" sx={{color: 'text.primary'}}>
                {title}
            </Typography>
            <Slider
                step={1}
                max={100}
                value={percentage}
                defaultValue={percentage}
                color="secondary"
                size="small"
            />
            <Typography variant="body1" sx={{color: 'text.primary'}}>
                ({percentage}%)
            </Typography>
        </Stack>
    )
}

export default RatingLine;