import Layout from "../../components/layout/layout";
import {Box, Container, Grid, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import banner from "../../assets/images/download.jpg";
import {AgroBrothers_DATA} from "../../utils/data";
import {UTILS} from "../../utils/utils";
import Diversity from "../../components/shared/diversity";
import {SearchOutlined} from "@mui/icons-material";
import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";


const AgroBrosPage = () => {

    const formik = useFormik({
        initialValues: {
            query: ''
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {

        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            query: yup.string().required('query required'),
        })
    });


    return (
        <Layout>
            <Overlay
                children={
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                        <Container>
                            <Grid container={true} spacing={4} alignItems="center">
                                <Grid item={true} xs={12} md={6}>
                                    <Typography variant="h5" sx={{color: 'white', mb: 2}}>
                                        Install 
                                    </Typography>
                                    <Typography variant="h6" sx={{color: 'white', mb: 2}}>
                                        Quench the hunger
                                    </Typography>
                                    <Typography variant="body1" sx={{color: 'white', mb: 6}}>
                                        AgroBrothers Will Give You Quick and continous Algorithms To Quench All Agricultural Stress Levels Quickly
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>}
                image={banner}
                backgroundColor="#000000"/>

            <Box sx={{backgroundColor: 'background.paper', py: 5}}>
                <Container sx={{py: 4}}>
                    <Grid justifyContent="space-between" alignItems="center" container={true} spacing={4}>
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="h5" sx={{color: 'text.primary', fontWeight: 'bold', mb: 4}}>
                                A Diversity of Brave Brothers For Positive Change
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <OutlinedInput
                                fullWidth={true}
                                value={formik.values.query}
                                id="query"
                                name="query"
                                type="text"
                                endAdornment={
                                    <InputAdornment
                                        position="end">
                                        <SearchOutlined
                                            sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 24,
                                            }}
                                        />
                                    </InputAdornment>
                                }
                                error={formik.touched.query && formik.errors.query}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter query"
                                required={true}
                                label="Email"
                                size="medium"
                                margin="dense"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{backgroundColor: 'background.default', py: 5}}>
                <Container sx={{py: 4}}>
                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                        A Diversity of Classic Brothers For the Change
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.primary', mb: 4}}>
                        Not sure what to make With Your Land ? Don't want a Time Spent away from Office? It doesn't matter what you're in
                        for or from, you'll find the perfect easy-to-get System that you will leave you smiling. Discover
                        more than enough in our collection
                    </Typography>
                </Container>

                <Container sx={{py: 4}}>
                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                        Our collection
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.primary', mb: 4}}>
                        Check out some of our collections you can enjoy time and time again. After all, our
                        discerning Users consider it their favourite and place it certified .
                    </Typography>
                </Container>
            </Box>

            <Box sx={{backgroundColor: 'background.paper', py: 5}}>
                <Container>
                    <Box sx={{mb: 2}}>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            Liberia
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterAgroByCountry(AgroBrothers_DATA.MEALS, 'liberia').map((food, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <Diversity food={food}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            South Africa
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterAgroByCountry(AgroBrothers_DATA.MEALS, 'south africa').map((food, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <Diversity food={food}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            Zimbabwe
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterAgroByCountry(AgroBrothers_DATA.MEALS, 'zimbabwe').map((food, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <Diversity food={food}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            Niger
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterAgroByCountry(AgroBrothers_DATA.MEALS, 'Niger').map((food, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <Diversity food={food}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>


                    <Box sx={{mb: 2}}>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            Ghana
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterAgroByCountry(AgroBrothers_DATA.MEALS, 'ghana').map((food, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <Diversity food={food}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>


                    <Box sx={{mb: 2}}>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            Nigeria
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterAgroByCountry(AgroBrothers_DATA.MEALS, 'nigeria').map((food, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <Diversity food={food}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>


                    <Box sx={{mb: 2}}>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            Ivory Coast
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterAgroByCountry(AgroBrothers_DATA.MEALS, 'ivory coast').map((food, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <Diversity food={food}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default AgroBrosPage;
