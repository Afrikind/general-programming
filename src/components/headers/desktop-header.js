import {Badge, Button, Container, Divider, Menu, MenuItem, Stack, Toolbar} from "@mui/material";
import logo from "./../../assets/images/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {DarkMode, Edit, LightMode, LoginOutlined, Logout, Notifications} from "@mui/icons-material";
import {selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import NavLink from "../shared/nav-link";

const DesktopHeader = () => {

    const {authData} = useSelector(selectAuth);
    const {themeVariant, activePath} = useSelector(selectUI);
    const dispatch = useDispatch();

    const [openMenu, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = event => {
        setMenuOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuOpen(false);
        setAnchorEl(null);
    }


    return (
        <Toolbar variant="regular">
            <Container maxWidth="xl">
                <Stack
                    divider={<Divider variant="fullWidth" light={true}/>}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <img
                                src={logo}
                                style={{width: '100%', maxHeight: 100, objectFit: 'contain', objectPosition: 'center'}}
                                alt="FoodBox Logo"
                            />
                        </Link>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={3}>
                        <NavLink label="Our Plan" path="/our-plan" active={activePath === '/our-plan'}/>
                        <Button
                            onClick={handleMenuOpen}

                            sx={{
                                color: activePath === '/our-menus' ? 'secondary.main' : 'text.secondary',
                                textTransform: 'capitalize',

                            }}
                            variant="text"
                            disableElevation={true}>
                            Our Menu
                        </Button>
                        <NavLink label="About Us" path="/about-us" active={activePath === '/about-us'}/>

                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={2}>

                        {authData && (
                            <React.Fragment>
                                <Link to="/trailer/new" style={{textDecoration: 'none'}}>
                                    <Button
                                        color="secondary"
                                        sx={{
                                            textTransform: 'capitalize',
                                        }}
                                        variant="contained"
                                        disableElevation={true}>
                                        {authData.username}
                                    </Button>
                                </Link>

                                <Badge color="secondary" max={100} badgeContent={999} variant="dot">
                                    <Notifications
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'secondary.main',
                                            padding: 1,
                                            fontSize: 18,
                                            backgroundColor: 'light.secondary'
                                        }}/>
                                </Badge>
                                <Logout

                                    sx={{
                                        cursor: 'pointer',
                                        color: 'secondary.main',
                                        padding: 1,
                                        fontSize: 18,
                                        backgroundColor: 'light.secondary'
                                    }}/>
                            </React.Fragment>
                        )}

                        {
                            !authData && (
                                <React.Fragment>
                                    <Link to="/auth/login" style={{textDecoration: 'none'}}>
                                        <Button
                                            color="secondary"
                                            startIcon={<LoginOutlined/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                            }}
                                            variant="text"
                                            disableElevation={true}>
                                            Login
                                        </Button>
                                    </Link>

                                    <Link to="/auth/register" style={{textDecoration: 'none'}}>
                                        <Button
                                            color="secondary"
                                            startIcon={<Edit/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                            }}
                                            variant="text"
                                            disableElevation={true}>
                                            Create Account
                                        </Button>
                                    </Link>
                                </React.Fragment>
                            )
                        }


                        {themeVariant === 'light' ? (
                            <DarkMode
                                onClick={() => dispatch(toggleTheme())}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <LightMode
                                onClick={() => dispatch(toggleTheme())}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        )}
                    </Stack>
                </Stack>


                <Menu
                    open={openMenu}
                    onClose={handleMenuClose}
                    elevation={2}
                    anchorEl={anchorEl}>
                    <MenuItem>
                        <Link to="/cookbook" style={{textDecoration: 'none'}}>
                            <Button
                                size="large"
                                sx={{
                                    justifyContent: 'flex-start',
                                    color: 'text.primary',
                                    textTransform: 'capitalize'
                                }}
                                fullWidth={true}
                                variant="text">
                                 Agrobook
                            </Button>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/our-meals" style={{textDecoration: 'none'}}>
                            <Button
                                size="large"
                                sx={{
                                    justifyContent: 'flex-start',
                                    color: 'text.primary',
                                    textTransform: 'capitalize'
                                }}
                                fullWidth={true}
                                variant="text">
                                 Plan Menu
                            </Button>
                        </Link>
                    </MenuItem>

                </Menu>

            </Container>
        </Toolbar>
    )
}


export default DesktopHeader;
