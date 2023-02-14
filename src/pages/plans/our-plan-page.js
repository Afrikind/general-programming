import Layout from "../../components/layout/layout";
import {Container, Typography} from "@mui/material";
import OurServicesPage from "../menus/our-Services-page";

const LikedTrailersPage = () => {
    return (
        <Layout>
            <Overlay
            children={<Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
            <Container>
            <Grid container={true} spacing={4} alignItems="center">
                        <Grid item={true} xs={12} md={6}>
                            <Typography variant="h3" sx={{color: 'white', mb: 2}}>
                                AgroBrothers
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', mb: 2}}>
                                Be a Brother, Feed Families
                            </Typography>
                            <Typography variant="body1" sx={{color: 'white', mb: 6}}>
                                Please progress by clicking the Button View our menu to start using our services and AUTOMATED SYSTEM
                            </Typography>
                            {authData && (<Link to="/our-Services" style={{textDecoration: 'none'}}>
                                <Button
                                    sx={{
                                        textTransform: 'capitalize', width: {xs: '100%', md: '40%'},

                                    }}
                                    variant="contained"
                                    disableElevation={true}
                                    size="large"
                                    color="secondary">
                                    View our menu
                                </Button>
                            </Link>)}
                            <Typography variant="h4" sx={{color: 'white', mb: 2}}>
                                Feel free to check weather updates and soil water content here
                            </Typography>

                            {authData && (<Link to="/notifications" style={{textDecoration: 'none'}}>
                                <Button
                                    sx={{
                                        textTransform: 'capitalize', width: {xs: '100%', md: '40%'},

                                    }}
                                    variant="contained"
                                    disableElevation={true}
                                    size="large"
                                    color="secondary">
                                    updates
                                </Button>
                                </Link>)}
                        </Grid>
                    </Grid>
                </Container>
            </Box>}
            image={banner}
            backgroundColor="#000000"/>
        </Layout>
    )
}

export default LikedTrailersPage;
