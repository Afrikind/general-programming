import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Typography} from "@mui/material";
import Overlay from "../../components/shared/overlay";
import banner from "../../assets/images/banner.jpg";
import {FOODBOX_DATA} from "../../utils/data";
import {UTILS} from "../../utils/utils";
import Diversity from "../../components/shared/diversity";


const OurMealsPage = () => {

    return (
        <Layout>
            <Overlay
                children={
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                        <Container>
                            <Grid container={true} spacing={4} alignItems="center">
                                <Grid item={true} xs={12} md={6}>
                                    <Typography variant="h4" sx={{color: 'white', mb: 2}}>
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
                    <Typography variant="h5" sx={{color: 'text.primary', fontWeight: 'bold', mb: 4}}>
                        Discover our Plan Menu
                    </Typography>
                </Container>
            </Box>

            <Box sx={{backgroundColor: 'background.default', py: 5}}>
                <Container sx={{py: 4}}>
                    <Typography align="center" variant="h5" sx={{color: 'text.primary', fontWeight: 'bold', mb: 4}}>
                        A Menu form M/D to M/D
                    </Typography>
                </Container>
            </Box>

            <Box sx={{backgroundColor: 'background.paper', py: 5}}>
                <Container>
                    <Box sx={{mb: 2}}>
                        <Typography sx={{color: 'text.primary', mb: 2}} variant="h5" align="center">
                            Cameroonian Meals
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
                </Container>
            </Box>
        </Layout>
    )
}

export default OurMealsPage;
