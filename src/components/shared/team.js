import React from "react";
import {Box, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

const Team = ({team}) => {
    return (
        <Card
            sx={{height: '100%', backgroundColor: 'background.paper', display: 'flex', flexDirection: 'column'}}
            elevation={0}>
            <Box sx={{flexGrow: 1}}>
                <Stack direction="column" spacing={1}>
                    <Stack direction="row" justifyContent="center">
                        <CardMedia
                            component="img"
                            src={team.image}
                            sx={{height: 250, objectFit: 'cover', objectPosition: 'top'}}
                        />
                    </Stack>
                    <CardContent>
                        <Stack spacing={1}>
                            <Typography
                                align="center"
                                variant="h6"
                                sx={{textTransform: 'capitalize', color: 'text.primary', fontWeight: 500}}>
                                {team.name}
                            </Typography>
                            <Typography
                                align="center" variant="body2"
                                sx={{textTransform: 'capitalize', color: 'text.secondary', fontWeight: 'bold'}}>
                                {team.position}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Stack>
            </Box>
        </Card>
    )
}

export default React.memo(Team);