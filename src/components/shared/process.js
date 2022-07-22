import { Card, Typography, Stack, CardContent } from "@mui/material"

const Process = ({process}) => {
    return (
        <Card elevation={0} sx={{height: '100%', backgroundColor: 'background.default'}}>
           <CardContent>
            <Stack mb={2} justifyContent="center" alignItems="center">
                <img
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        height: 100,
                        maxWidth: '100%',
                        borderRadius: '100%',
                    }}
                    src={process.image}
                    alt={process.name}
                />
            </Stack>
            <Typography
                align="center"
                variant="h6"
                sx={{color: 'text.primary', fontWeight: 400, mb: 2}}>
                {process.title}
            </Typography>
            <Typography
                align="center"
                variant="body1"
                sx={{color: 'text.secondary'}}>
                {process.description}
            </Typography>
            </CardContent>
        </Card>
    )
}

export default Process;