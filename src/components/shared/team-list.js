import {Avatar, Box, Card, CardContent, Stack, Typography} from "@mui/material";
import React from "react";

const TeamListItem = ({team}) => {
    return (
        <Card sx={{height: '100%', backgroundColor: 'background.paper'}} elevation={0}>
            <Box sx={{display: 'flex'}}>
                <Avatar
                    variant="rounded"
                    src={team.image}
                    sx={{flexBasis: '40%', width: '100%', height: 300, objectFit: 'contain', objectPosition: 'top'}}
                />
                <CardContent sx={{flexBasis: '60%',}}>
                    <Stack spacing={2} direction="column" justifyContent="space-between">
                        <Typography variant="h6"
                                    sx={{textTransform: 'capitalize', color: 'text.title', fontWeight: 500}}>
                            {team.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{textTransform: 'capitalize', color: 'text.secondary', fontWeight: 'bold'}}>
                            {team.role}
                        </Typography>
                        <Typography variant="body2" sx={{textTransform: 'capitalize', color: 'text.secondary'}}>
                            {team.description}
                        </Typography>
                    </Stack>
                </CardContent>
            </Box>
        </Card>
    )
}

export default TeamListItem;
