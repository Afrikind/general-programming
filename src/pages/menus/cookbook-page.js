import Layout from "../../components/layout/layout";
import {Box, Container, Grid, InputAdornment, OutlinedInput, Typography} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import banner from "../../assets/images/banner.jpg";
import {FOODBOX_DATA} from "../../utils/data";
import {UTILS} from "../../utils/utils";
import Diversity from "../../components/shared/diversity";
import {SearchOutlined} from "@mui/icons-material";
import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";


const CookbookPage = () => {

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
                                        Cook up some mischief
                                    </Typography>
                                    <Typography variant="h6" sx={{color: 'white', mb: 2}}>
                                        Quench the hunger
                                    </Typography>
                                    <Typography variant="body1" sx={{color: 'white', mb: 6}}>
                                        Foodboxx is a meal kit delivery company that provides you will fresh, prepped,
                                        and pre-measured ingredients needed for a meal per the number of people to be
                                        fed.
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
                                A Diversity of Tasty African Recipes for Dinner
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
                        A Diversity of Tasty African Recipes for Dinner
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.primary', mb: 4}}>
                        Not sure what to make for dinner? Don't want a big hassle? It doesn't matter what you're in the
                        mood for, you'll find the perfect easy-to-cook meal that you will leave you smiling. Discover
                        more than 2, 500 delicious dinner recipes in our recipe collection
                    </Typography>
                </Container>

                <Container sx={{py: 4}}>
                    <Typography variant="h5" sx={{color: 'text.primary', mb: 4}}>
                        Our Popular Recipes
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.primary', mb: 4}}>
                        Check out some of our most popular recipes you can enjoy time and time again. After all, our
                        discerning eaters consider these their favorite meals and labeled them as certified delicious.
                    </Typography>
                </Container>
            </Box>

            <Box sx={{backgroundColor: 'background.paper', py: 5}}>
                <Container>
                    <Box sx={{mb: 2}}>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            Liberian Meals
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterFoodByCountry(FOODBOX_DATA.MEALS, 'liberia').map((food, index) => {
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
                            South African Meals
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterFoodByCountry(FOODBOX_DATA.MEALS, 'south africa').map((food, index) => {
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
                            Zimbabwean Meals
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterFoodByCountry(FOODBOX_DATA.MEALS, 'zimbabwe').map((food, index) => {
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
                            Benin Meals
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterFoodByCountry(FOODBOX_DATA.MEALS, 'benin').map((food, index) => {
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
                            Ghanaian Meals
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterFoodByCountry(FOODBOX_DATA.MEALS, 'ghana').map((food, index) => {
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
                            Nigerian Meals
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterFoodByCountry(FOODBOX_DATA.MEALS, 'nigeria').map((food, index) => {
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
                            Ivorian Meals
                        </Typography>

                        <Grid container={true} spacing={4}>
                            {UTILS.filterFoodByCountry(FOODBOX_DATA.MEALS, 'ivory coast').map((food, index) => {
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

export default CookbookPage;
