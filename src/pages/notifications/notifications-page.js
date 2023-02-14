import Layout from "../../components/layout/layout";
import {Container, Typography} from "@mui/material";

const NotificationsPage = () => {
    return (
        <Layout>
            <Container>
                <Typography variant="h2" align="center">
                    The current weather is  31*c
                </Typography>
                <Typography variant="h4" align="center">
                    Stay close to your internet to get live update on your soil water content
                </Typography>
                <Button
                sx={{
                    textTransform: 'capitalize', width: {xs: '100%', md: '40%'},

                }}
                variant="contained"
                disableElevation={true}
                size="large"
                color="secondary">
                View soil
            </Button>
            <Button
                sx={{
                    textTransform: 'capitalize', width: {xs: '100%', md: '40%'},

                }}
                variant="contained"
                disableElevation={true}
                size="large"
                color="secondary">
                View reservoir content
            </Button>

            <Button
                sx={{
                    textTransform: 'capitalize', width: {xs: '100%', md: '40%'},

                }}
                variant="contained"
                disableElevation={true}
                size="large"
                color="secondary">
                sign-Out
            </Button>
            </Container>
        </Layout>
    )
}

export default NotificationsPage;
