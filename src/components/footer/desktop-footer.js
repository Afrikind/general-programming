import React from "react";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    InputAdornment,
    Link as MUILink,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "./../../assets/images/LOgo.jpeg";
import * as yup from "yup";
import {useFormik} from "formik";
import {Call, Facebook, Instagram, LinkedIn, MailOutline, WhatsApp, YouTube} from "@mui/icons-material";

const DesktopFooter = () => {

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {

        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            email: yup.string().email('Invalid email').required('email required'),
        })
    });


    return (
        <Box sx={{backgroundColor: 'background.default', py: 4}}>
            <Container>
                <Grid container={true} spacing={4}>
                    <Grid xs={4} item={true}>
                        <Stack spacing={1}>
                            <img src={logo} style={{width: '100%', height: 200, objectFit: 'contain'}} alt=""/>
                            <OutlinedInput
                                fullWidth={true}
                                value={formik.values.email}
                                id="email"
                                name="email"
                                type="email"
                                endAdornment={
                                    <InputAdornment
                                        position="end">
                                        <MailOutline
                                            sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 24,
                                            }}
                                        />
                                    </InputAdornment>
                                }
                                error={formik.touched.email && formik.errors.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter email address"
                                required={true}
                                label="Email"
                                size="medium"
                                margin="dense"
                            />

                            <Button
                                sx={{
                                    textTransform: 'capitalize',

                                }}
                                variant="contained"
                                disableElevation={true}
                                size="large"
                                color="secondary">
                                Subscribe
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid xs={4} item={true}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                            Our Company
                        </Typography>
                        <Divider variant="fullWidth" sx={{my: 2}}/>
                        <Stack direction="column" spacing={1}>
                            <Link to="/press-release" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    AgroBrothers Group
                                </Button>
                            </Link>

                        </Stack>
                    </Grid>
                    <Grid xs={4} item={true}>
                        <Typography variant="h6" sx={{color: 'text.primary'}}>
                            Contact Us
                        </Typography>
                        <Divider variant="fullWidth" sx={{my: 2}}/>
                        <Grid container={true} spacing={1}>
                            <Grid xs={4} item={true}>
                                <MUILink href={``}>
                                    <Call color="secondary"/>
                                </MUILink>
                            </Grid>
                            <Grid xs={4} item={true}>
                                <MUILink href={``}>
                                    <Instagram color="secondary"/>
                                </MUILink>
                            </Grid>
                            <Grid xs={4} item={true}>
                                <MUILink href={``}>
                                    <WhatsApp color="secondary"/>
                                </MUILink>
                            </Grid>
                            <Grid xs={4} item={true}>
                                <MUILink href={``}>
                                    <Facebook color="secondary"/>
                                </MUILink>
                            </Grid>
                            <Grid xs={4} item={true}>
                                <MUILink href={``}>
                                    <LinkedIn color="secondary"/>
                                </MUILink>
                            </Grid>
                            <Grid xs={4} item={true}>
                                <MUILink href={``}>
                                    <YouTube color="secondary"/>
                                </MUILink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default DesktopFooter;
