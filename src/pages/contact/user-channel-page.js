import Layout from "../../components/layout/layout";
import {Box, Button, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import banner from "./../../assets/images/download.jpg";
import {useSelector} from "react-redux";
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {AgroBrothers_DATA} from "../../utils/data";
import {Container, Typography} from "@mui/material";

const UserChannelPage = () => {
    return (
        <Layout>
            <Overlay
            children={<><Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}></Box><Container>
                    <Grid container={true} spacing={4} alignItems="center">
                        <Grid item={true} xs={12} md={6}>
                            <Typography variant="h3" sx={{ color: 'white', mb: 2 }}>
                                AgroBrothers
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                                Be a Brother, Feed Families
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mb: 6 }}>
                                AgroBrothers is a fullStack Agric company that provides you with latest technoligy and
                                easy guidelines for Progressive Agriculture...
                            </Typography>
                            {authData && (<Link to="/our-menu" style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        textTransform: 'capitalize', width: { xs: '100%', md: '40%' },
                                    }}
                                    variant="contained"
                                    disableElevation={true}
                                    size="large"
                                    color="secondary">
                                    View our menu
                                </Button>
                            </Link>)}

                        </Grid>
                    </Grid>
                </Container></>
           }
            image={banner}
            backgroundColor="#000000"/>
        </Layout>
    )
}

export default UserChannelPage;
