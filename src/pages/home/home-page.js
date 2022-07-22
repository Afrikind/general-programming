import Layout from "../../components/layout/layout";
import {Box, Button, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import banner from "./../../assets/images/banner.jpg";
import {useSelector} from "react-redux";
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {FOODBOX_DATA} from "../../utils/data";
import Reason from "../../components/shared/reason";
import Process from "../../components/shared/process";
import pack from "./../../assets/images/kouji-tsuru-FG3EjROIvZ4-unsplash.jpg";
import Carousel from "react-multi-carousel";
import {UTILS} from "../../utils/utils";
import Diversity from "../../components/shared/diversity";
import Team from "../../components/shared/team";
import about from "./../../assets/images/about-us.PNG";

const HomePage = () => {

    const {authData} = useSelector(selectAuth);

    return (<Layout>
        <Overlay
            children={<Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                <Container>
                    <Grid container={true} spacing={4} alignItems="center">
                        <Grid item={true} xs={12} md={6}>
                            <Typography variant="h3" sx={{color: 'white', mb: 2}}>
                                Foodboxx
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', mb: 2}}>
                                Eat food, Stay healthy
                            </Typography>
                            <Typography variant="body1" sx={{color: 'white', mb: 6}}>
                                Foodboxx is a meal kit delivery company that provides you will fresh, prepped, and
                                pre-measured ingredients needed for a meal per the number of people to be fed.
                            </Typography>
                            {authData && (<Link to="/our-menu" style={{textDecoration: 'none'}}>
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

                        </Grid>
                    </Grid>
                </Container>
            </Box>}
            image={banner}
            backgroundColor="#000000"/>


        <Box sx={{
            minHeight: '50vh', py: 5, display: 'flex', alignItems: 'center', backgroundColor: 'background.default'
        }}>
            <Container maxWidth="xl">
                <Box>
                    <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                        Why Foodboxx
                    </Typography>

                    <Grid container={true} spacing={4}>
                        {FOODBOX_DATA.WHY_FOODBOXX.map((reason, index) => {
                            return (<Grid key={index} item={true} xs={12} md={6} lg={3}>
                                <Reason reason={reason}/>
                            </Grid>)
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>


        <Box sx={{
            minHeight: '50vh', py: 5, display: 'flex', alignItems: 'center', backgroundColor: 'background.default'
        }}>
            <Container maxWidth="xl">
                <Box spacing={4}>
                    <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                        How it works
                    </Typography>

                    <Grid container={true} spacing={4}>
                        {FOODBOX_DATA.PROCESS.map((process, index) => {
                            return (<Grid key={index} item={true} xs={12} md={4}>
                                <Process process={process}/>
                            </Grid>)
                        })}
                    </Grid>

                    <Stack direction="row" justifyContent="center">
                        <Link to="/our-plan" style={{textDecoration: 'none'}}>
                            <Button
                                sx={{
                                    textTransform: 'capitalize',
                                }}
                                variant="contained"
                                disableElevation={true}
                                size="large"
                                color="secondary">
                                Get Started
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Box>

        <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper', pt: 5}}>
            <Typography align="center" variant="h5"
                        sx={{color: 'text.primary', fontWeight: 500, mb: 2, textTransform: 'uppercase', px: 4}}>
                Discover a cheaper and healthy way to eat
            </Typography>
            <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                <Container sx={{flex: 1, py: 4}}>
                    <Stack direction="column" spacing={2}>
                        <Box>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h6" sx={{
                                    color: 'text.primary', fontWeight: 500, textTransform: 'capitalize'
                                }}>
                                    What is inside your delivery pack?
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Easy-to-follow recipes with clear nutritional info

                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    High-quality ingredients sourced straight from the farm
                                </Typography>

                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Convenient meal kits that fit perfectly in the fridge
                                </Typography>

                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    A fun cooking experience that makes you feel unstoppable
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
                <Box sx={{flex: 1, minHeight: '100%'}}>
                    <CardMedia
                        component="img"
                        src={pack}
                        sx={{
                            height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center'
                        }}
                    />
                </Box>
            </Box>
        </Box>

        <Box sx={{minHeight: '50vh', backgroundColor: 'background.default', pt: 5}}>
            <Container>
                <Typography align="center" variant="h5"
                            sx={{color: 'text.primary', fontWeight: 500, mb: 2, textTransform: 'uppercase', px: 4}}>
                    A diversity of foods from African countries represented
                </Typography>
                <Typography align="center" variant="body1"
                            sx={{color: 'text.secondary', mb: 2, textTransform: 'uppercase'}}>
                    Easy meals designed by professional chefs and nutritionists
                </Typography>
            </Container>
            <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                <Container sx={{flex: 1, py: 4}}>
                    <Carousel
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        infinite={true}
                        partialVisible={true}
                        keyBoardControl={true}
                        pauseOnHover={true}
                        responsive={UTILS.responsive}>
                        {FOODBOX_DATA.DIVERSITY.map(food => {
                            return (

                                <Box key={food.name} sx={{mx: 1, height: '100%'}}>
                                    <Diversity variant="outlined" food={food}/>
                                </Box>)
                        })}
                    </Carousel>
                </Container>
            </Box>
        </Box>

        <Box sx={{
            minHeight: '50vh', py: 5, display: 'flex', alignItems: 'center', backgroundColor: 'background.default'
        }}>
            <Container maxWidth="xl">
                <Box spacing={4}>
                    <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                        Our Team
                    </Typography>

                    <Grid container={true} spacing={4}>
                        {FOODBOX_DATA.TEAM.map((team, index) => {
                            return (<Grid key={index} item={true} xs={12} md={6} lg={3}>
                                <Team team={team}/>
                            </Grid>)
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>

        <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper'}}>
            <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                <Box sx={{flex: 1, minHeight: '100%'}}>
                    <CardMedia
                        component="img"
                        src={about}
                        sx={{
                            height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center'
                        }}
                    />
                </Box>
                <Container sx={{flex: 1, py: 4}}>
                    <Box>
                        <Stack direction="column" spacing={2}>
                            <Typography variant="body1" sx={{
                                color: 'text.secondary', textTransform: 'uppercase'
                            }}>
                                About Us
                            </Typography>
                            <Typography variant="h5" sx={{color: 'text.primary'}}>
                                A service of delivery ingredient food
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Foodboxx aims to provide people with the opportunity to enjoy wholesome home-cooked
                                meals with no planning, no shopping and no stress required.
                            </Typography>
                            <Link to="/about-us" style={{textDecoration: 'none'}}>
                                <Button
                                    sx={{
                                        textTransform: 'capitalize',

                                    }}
                                    variant="contained"
                                    disableElevation={true}
                                    size="large"
                                    color="secondary">
                                    Learn More
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>

    </Layout>)
}

export default HomePage;
