import Layout from "../../components/layout/layout";
import {Box, CardMedia, Container, Divider, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import React from "react";
import meals from "../../assets/images/img.png";
import sourcing from "../../assets/images/img_1.png";
import packaging from "../../assets/images/img_2.png";
import {FOODBOX_DATA} from "../../utils/data";
import TeamListItem from "../../components/shared/team-list";
import Team from "../../components/shared/team";

const AboutPage = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (<Layout>
        <Overlay
            children={<Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                <Container>
                    <Grid container={true} spacing={4} alignItems="center">
                        <Grid item={true} xs={12} md={6}>
                            <Typography variant="h3" sx={{color: 'white', mb: 2}}>
                                About Foodboxx
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', mb: 6}}>
                                Foodboxx aims to provide people with the opportunity to enjoy wholesome
                                home-cooked
                                meals with no planning, no shopping and no stress required.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>}
            backgroundColor="#000000"/>

        <Box sx={{
            minHeight: '30vh', backgroundColor: 'background.paper', pt: 5, display: 'flex', alignItems: 'center'
        }}>
            <Container maxWidth="xs">
                <Typography
                    align="center"
                    variant="h5"
                    sx={{color: 'text.primary', fontWeight: 500, mb: 2, textTransform: 'uppercase', px: 4}}>
                    Our Mission
                </Typography>
                <Typography
                    align="center"
                    variant="body1"
                    sx={{color: 'text.secondary', mb: 2, textTransform: 'uppercase'}}>
                    Foodboxx aims to provide people
                    with the opportunity to enjoy
                    wholesome home-cooked meals
                    with no planning, no shopping and
                    no stress required
                </Typography>
            </Container>
        </Box>

        <Box sx={{minHeight: '50vh', backgroundColor: 'background.default'}}>
            <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                <Box sx={{flex: 1, minHeight: '100%'}}>
                    <CardMedia
                        component="img"
                        src={meals}
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            maxHeight: '50vh'
                        }}
                    />
                </Box>
                <Container sx={{flex: 1, py: 4}}>
                    <Box>
                        <Stack direction="column" spacing={2}>
                            <Typography variant="h5" sx={{color: 'text.primary'}}>
                                Meals from Africa
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                We are providing meals from Africa. So you can enjoy diverse African food straight
                                from the confort of your home.
                            </Typography>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>

        <Box sx={{
            minHeight: '30vh', backgroundColor: 'background.paper', pt: 5, display: 'flex', alignItems: 'center'
        }}>
            <Container maxWidth="xs">
                <Typography
                    align="center"
                    variant="body1"
                    sx={{color: 'text.secondary', mb: 2, textTransform: 'uppercase'}}>
                    Eat More Sustainably with Africa's #1
                    Meal Kit.
                </Typography>
            </Container>
        </Box>
        <Box sx={{
            minHeight: '20vh', backgroundColor: 'secondary.main', pt: 5, display: 'flex', alignItems: 'center'
        }}>
            <Container maxWidth="xs">
                <Typography align="center" variant="body1"
                            sx={{color: 'white', mb: 2, textTransform: 'uppercase'}}>
                    #Zero food waste
                </Typography>
            </Container>
        </Box>

        <Box sx={{minHeight: '50vh', backgroundColor: 'background.default', display: 'flex', alignItems: 'center', py: 3}}>
            <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                <Box sx={{flex: 1, minHeight: '100%'}}>
                    <CardMedia
                        component="img"
                        src={sourcing}
                        sx={{
                            height: '100%',
                            width: '100%',
                            maxHeight: '50vh',
                            objectFit: 'contain',
                            objectPosition: 'center'
                        }}
                    />
                </Box>
                <Container sx={{flex: 1, py: 4}}>
                    <Box>
                        <Stack direction="column" spacing={2}>
                            <Typography variant="h5" sx={{color: 'text.primary'}}>
                                Meals from Africa
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                We are providing meals from Africa. So you can enjoy diverse African food straight
                                from the conform of your home.
                            </Typography>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>

        <Box sx={{minHeight: '50vh', backgroundColor: 'background.paper', py: 3}}>
            <Box sx={{alignItems: 'center', display: 'flex', flexDirection: {xs: 'column', lg: 'row'}}}>
                <Container sx={{flex: 1, py: 4}}>
                    <Box>
                        <Stack direction="column" spacing={2}>
                            <Typography variant="h5" sx={{color: 'text.primary'}}>
                                SMARTER PACKAGING
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Eco-friendly boxes
                                recyclable waste for boxes
                                recyclable waste for recipe card
                            </Typography>
                        </Stack>
                    </Box>
                </Container>
                <Box sx={{flex: 1, minHeight: '100%'}}>
                    <CardMedia
                        component="img"
                        src={packaging}
                        sx={{
                            height: '100%',
                            width: '100%',
                            maxHeight: '50vh',
                            objectFit: 'contain',
                            objectPosition: 'center'
                        }}
                    />
                </Box>
            </Box>
        </Box>


        <Container sx={{py: 4}}>
            <Box>
                <Typography variant="h4" sx={{color: 'text.primary', mb: 3}}>
                    Team Profiles
                </Typography>
                <Divider variant="fullWidth" sx={{my: 4}} light={true}/>

                <Grid container={true} spacing={2}>
                    {matches ? (FOODBOX_DATA.TEAM.map(team => {
                        return (<Grid item={true} key={team._id} xs={12}>
                            <Team team={team}/>
                        </Grid>)
                    })) : (FOODBOX_DATA.TEAM.map(team => {
                        return (<Grid item={true} key={team._id} xs={12}>
                            <TeamListItem team={team}/>
                        </Grid>)
                    }))}
                </Grid>
            </Box>
        </Container>
    </Layout>)
}

export default AboutPage;
