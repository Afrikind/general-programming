import Layout from "../../components/layout/layout";
import {Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {Call, Contacts, Mail, Male, Person} from "@mui/icons-material";
import Info from "../../components/shared/info";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {UTILS} from "../../utils/utils";

const ProfilePage = () => {


    const {authData} = useSelector(selectAuth);

    return (
        <Layout>
            <Box sx={{py: 4}}>
                <Container>
                    <Grid
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        container={true}>
                        <Grid item={true} xs={12} md="auto">
                            <Typography sx={{color: 'text.primary'}} variant="h4">Profile</Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Link to="/settings" style={{textDecoration: 'none'}}>
                                <Button
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                    }}
                                    color="secondary"
                                    variant="outlined"
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large">
                                    Update Profile
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>

                    <Divider light={true} sx={{my: 4}}/>

                    <Grid spacing={2} container={true}>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{
                                mb: 2,
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                            }}>
                                <CardContent>
                                    <Stack mb={2} direction="row" justifyContent="center">
                                        <Avatar
                                            sx={{
                                                width: 100,
                                                height: 100,
                                                borderTopRightRadius: 32,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 32,
                                                borderTopLeftRadius: 32,
                                                backgroundColor: 'light.secondary'
                                            }}>
                                            <Typography sx={{color: 'secondary.main'}} variant="h3">
                                                {authData && UTILS.getInitials(`${authData?.firstName} ${authData?.lastName}`)}
                                            </Typography>
                                        </Avatar>
                                    </Stack>
                                    <Typography
                                        mb={1}
                                        variant="h6"
                                        align="center">
                                        {`${authData?.firstName} ${authData?.lastName}`}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={8}>
                            <Grid spacing={2} container={true}>
                                <Grid item={true} xs={12}>
                                    <Card elevation={0} sx={{
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                    }}>
                                        <CardContent>
                                            <Stack
                                                mb={1}
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center">
                                                <Button
                                                    disableRipple={true}
                                                    variant="text"
                                                    size="small"
                                                    color="secondary"
                                                    startIcon={<Person
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                            padding: 0.5,
                                                            fontSize: 20,
                                                            backgroundColor: 'light.secondary'
                                                        }}/>}>
                                                    Personal Details
                                                </Button>
                                            </Stack>

                                            <Divider light={true} sx={{my: 1}} variant="middle"/>

                                            <Grid spacing={2} container={true}>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Info
                                                        icon={<Person
                                                            sx={{
                                                                cursor: 'pointer',
                                                                color: 'secondary.main',
                                                                borderTopRightRadius: 32,
                                                                borderBottomRightRadius: 0,
                                                                borderBottomLeftRadius: 32,
                                                                borderTopLeftRadius: 32,
                                                                padding: 0.5,
                                                                fontSize: 20,
                                                                backgroundColor: 'light.secondary'
                                                            }}/>}
                                                        title="First Name"
                                                        value={authData?.firstName}

                                                    />
                                                </Grid>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Info
                                                        icon={<Male
                                                            sx={{
                                                                cursor: 'pointer',
                                                                color: 'secondary.main',
                                                                borderTopRightRadius: 32,
                                                                borderBottomRightRadius: 0,
                                                                borderBottomLeftRadius: 32,
                                                                borderTopLeftRadius: 32,
                                                                padding: 0.5,
                                                                fontSize: 20,
                                                                backgroundColor: 'light.secondary'
                                                            }}/>}
                                                        title="Surname"
                                                        value={authData?.lastName}

                                                    />
                                                </Grid>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Info
                                                        icon={<Male
                                                            sx={{
                                                                cursor: 'pointer',
                                                                color: 'secondary.main',
                                                                borderTopRightRadius: 32,
                                                                borderBottomRightRadius: 0,
                                                                borderBottomLeftRadius: 32,
                                                                borderTopLeftRadius: 32,
                                                                padding: 0.5,
                                                                fontSize: 20,
                                                                backgroundColor: 'light.secondary'
                                                            }}/>}
                                                        title="Gender"
                                                        value={authData?.gender}
                                                    />
                                                </Grid>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Info
                                                        icon={<Person
                                                            sx={{
                                                                cursor: 'pointer',
                                                                color: 'secondary.main',
                                                                borderTopRightRadius: 32,
                                                                borderBottomRightRadius: 0,
                                                                borderBottomLeftRadius: 32,
                                                                borderTopLeftRadius: 32,
                                                                padding: 0.5,
                                                                fontSize: 20,
                                                                backgroundColor: 'light.secondary'
                                                            }}/>}
                                                        title="Username"
                                                        value={authData?.username}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12}>
                                    <Card elevation={0}
                                          sx={{
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                    }}>
                                        <CardContent>
                                            <Stack
                                                mb={1}
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center">
                                                <Button
                                                    disableRipple={true}
                                                    variant="text"
                                                    size="small"
                                                    color="secondary"
                                                    startIcon={<Contacts
                                                        sx={{
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                            padding: 0.5,
                                                            fontSize: 20,
                                                            backgroundColor: 'light.secondary'
                                                        }}/>}>
                                                    Contact Details
                                                </Button>
                                            </Stack>

                                            <Divider light={true} sx={{my: 1}} variant="middle"/>

                                            <Grid spacing={2} container={true}>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Info
                                                        icon={<Mail
                                                            sx={{
                                                                cursor: 'pointer',
                                                                color: 'secondary.main',
                                                                borderTopRightRadius: 32,
                                                                borderBottomRightRadius: 0,
                                                                borderBottomLeftRadius: 32,
                                                                borderTopLeftRadius: 32,
                                                                padding: 0.5,
                                                                fontSize: 20,
                                                                backgroundColor: 'light.secondary'
                                                            }}/>}
                                                        title="Email"
                                                        value={authData?.email}

                                                    />
                                                </Grid>
                                                <Grid item={true} xs={12} md={6}>
                                                    <Info
                                                        icon={<Call
                                                            sx={{
                                                                cursor: 'pointer',
                                                                color: 'secondary.main',
                                                                borderTopRightRadius: 32,
                                                                borderBottomRightRadius: 0,
                                                                borderBottomLeftRadius: 32,
                                                                borderTopLeftRadius: 32,
                                                                padding: 0.5,
                                                                fontSize: 20,
                                                                backgroundColor: 'light.secondary'
                                                            }}/>}
                                                        title="Phone"
                                                        value={authData?.phoneNumber}

                                                    />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ProfilePage;