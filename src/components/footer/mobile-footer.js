import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    Link as MUILink,
    Stack,
    Typography
} from "@mui/material";
import {ChevronRight, OpenInNew} from "@mui/icons-material";
import {Link} from "react-router-dom";

const MobileFooter = () => {

    return (
        <Box sx={{backgroundColor: 'background.paper', py: 2}}>
            <Container>
                <Accordion sx={{backgroundColor: 'background.paper'}} variant="elevation" elevation={0}>
                    <AccordionSummary expandIcon={<ChevronRight color="primary"/>}>
                        <Typography variant="body1" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                            Quick Links
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="column" spacing={1}>
                            <MUILink href="https://passport.mfa.gov.gh/" target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    Online Passport Application
                                </Button>
                            </MUILink>
                            <MUILink href="https://www.bog.gov.gh/" target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    Bank of Ghana
                                </Button>
                            </MUILink>
                            <MUILink href="http://www.ghana.travel/" target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    GTA
                                </Button>
                            </MUILink>
                            <MUILink href="http://www.gfzb.com.gh/" target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    GFZB
                                </Button>
                            </MUILink>
                            <MUILink
                                href="https://www.thisnation.com/politics/economy/ghana-investment-promotion-centre-gipc/"
                                target="_blank" underline="none">
                                <Button endIcon={<OpenInNew/>} size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                    GIPC
                                </Button>
                            </MUILink>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor: 'background.paper'}} variant="elevation" elevation={0}>
                    <AccordionSummary expandIcon={<ChevronRight color="primary"/>}>
                        <Typography variant="body1" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                            Public
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="column" spacing={1}>
                            <Link to="/press-release" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Press Release
                                </Button>
                            </Link>
                            <Link to="/announcements" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Announcement
                                </Button>
                            </Link>
                            <Link to="/events" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Events
                                </Button>
                            </Link>
                            <Link to="/news" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    News
                                </Button>
                            </Link>
                            <Link to="/vacancies" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Vacancies
                                </Button>
                            </Link>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor: 'background.paper'}} variant="elevation" elevation={0}>
                    <AccordionSummary expandIcon={<ChevronRight color="primary"/>}>
                        <Typography variant="body1" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                            Media
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="column" spacing={1}>
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Videos
                                </Button>
                            </Link>
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Photos
                                </Button>
                            </Link>
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Publications
                                </Button>
                            </Link>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{backgroundColor: 'background.paper'}} variant="elevation" elevation={0}>
                    <AccordionSummary expandIcon={<ChevronRight color="primary"/>}>
                        <Typography variant="body1" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                            About Ghana
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="column" spacing={1}>
                            <Link to="/about-ghana" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Profile
                                </Button>
                            </Link>
                            <Link to="/about-ghana/economy" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Economy
                                </Button>
                            </Link>
                            <Link to="/about-ghana/regions" style={{textDecoration: 'none'}}>
                                <Button size="small" sx={{
                                    color: 'text.secondary',
                                    textTransform: 'capitalize',
                                    justifyContent: 'flex-start'
                                }}>
                                    Regions
                                </Button>
                            </Link>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Box>
    )
}

export default MobileFooter;
