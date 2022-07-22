import React from "react";
import {Box, Divider} from "@mui/material";
import Copyright from "./copyright";
import DesktopFooter from "./desktop-footer";
import MobileFooter from "./mobile-footer";


const Footer = () => {
    return (
        <React.Fragment>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopFooter/>
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileFooter/>
            </Box>
            <Divider variant="middle" light={true}/>
            <Copyright/>
        </React.Fragment>
    )
}

export default Footer;
