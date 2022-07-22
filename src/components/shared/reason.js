import { Card, Typography, Stack, CardContent } from "@mui/material"

const Reason = ({reason}) => {
    return (
        <Card elevation={0} sx={{height: '100%'}}>
           <CardContent>
            <Stack mb={2} justifyContent="center" alignItems="center">
                <img
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        height: 270,
                        maxWidth: '100%',
                        borderRadius: '100%',
                    }}
                    src={reason.image}
                    alt={reason.name}
                />
            </Stack>
            <Typography
                align="center"
                variant="h6"
                sx={{color: 'text.primary', fontWeight: 400, mb: 2}}>
                {reason.title}
            </Typography>
            <Typography
                align="center"
                variant="body1"
                sx={{color: 'text.secondary'}}>
                {reason.description}
            </Typography>
            </CardContent>
        </Card>
    )
}

export default Reason;