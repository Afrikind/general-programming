import Layout from "../../components/layout/layout";
import {Box, CardMedia, Container, Divider, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import React from "react";
import meals from "../../assets/images/2023-02-06 (5).png";
import sourcing from "../../assets/images/imogre.jpg";
import packaging from "../../assets/images/climate.jfif";
import {AgroBrothers_DATA} from "../../utils/data";
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
                                About AgroBrothers
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', mb: 6}}>
                            AgroBrothers is a company that Posesses The Automated Irrigation System, Through this we improve crop production thereby increasing the societies economy and innovating activities such as food production for the benefit of mankind
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
                    Our vision
                </Typography>
                <Typography
                    align="center"
                    variant="body1"
                    sx={{color: 'text.secondary', mb: 2, textTransform: 'uppercase'}}>
                    AgroBrothers Stands Out in several major SDG's Namely: (1) No poverty, (2) Zero Hunger (3) Economic Growth (4) Innovation ... As We engage in intense Activities to Oversee Better living
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
                                Local Remote Technology
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                As They are Made Locally in africa, They Are Affordable as well and simply defined
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
                  We are #1  In What We Do
                </Typography>
            </Container>
        </Box>
        <Box sx={{
            minHeight: '20vh', backgroundColor: 'secondary.main', pt: 5, display: 'flex', alignItems: 'center'
        }}>
            <Container maxWidth="xs">
                <Typography align="center" variant="body1"
                            sx={{color: 'white', mb: 2, textTransform: 'uppercase'}}>
                    #Zero Hunger
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
                                NO Poverty
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                We provide Technology in Africa, Employing The People, We buy our component and enlist low income earners with a payplan through this we are increasing employment...
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
                                Innovation 
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                 Utilizing Water Through Recycling
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
                    {matches ? (AgroBrothers_DATA.TEAM.map(team => {
                        return (<Grid item={true} key={team._id} xs={12}>
                            <Team team={team}/>
                        </Grid>)
                    })) : (AgroBrothers_DATA.TEAM.map(team => {
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
