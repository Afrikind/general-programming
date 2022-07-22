import {Card, CardContent, Stack, Typography} from "@mui/material";

const Info = ({title, value, icon}) => {

    return (
        <Card elevation={0}>
            <CardContent>
                <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center">
                    {icon}

                    <Stack direction="column">
                        <Typography
                            sx={{fontSize: 12, color: 'text.secondary'}}
                            variant="body2">
                            {title}
                        </Typography>

                        <Typography
                            sx={{fontSize: 14, color: 'text.primary'}}
                            variant="body2">
                            {value}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Info;