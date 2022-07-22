import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import { Link } from "react-router-dom";

const Copyright = () => {

    return (
        <Box sx={{padding: 2, backgroundColor: 'background.default'}}>
        <Grid container={true} justifyContent="space-between" >
            <Grid item={true} xs={12} md={3}>
            <Link style={{textDecoration: 'none'}} to="/terms">
            <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                &copy; Foodboxx 2022
                </Typography>
            </Link>
            </Grid>
            
            <Grid item={true} xs={12} md={3}>
            <Link style={{textDecoration: 'none'}} to="/terms">
            <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                Terms and Conditions
                </Typography>
            </Link>
            </Grid>

            <Grid item={true} xs={12} md={3}>
            <Link style={{textDecoration: 'none'}} to="/privacy">
            <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                Privacy
                </Typography>
            </Link>
            </Grid>

            <Grid item={true} xs={12} md={3}>
            <Link style={{textDecoration: 'none'}} to="/accessibility">
            <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                Accessibility
                </Typography>
            </Link>
            </Grid>
            </Grid>
        </Box>
    )
}

export default Copyright;
