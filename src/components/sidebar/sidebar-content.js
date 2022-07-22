import {Avatar, Box, Button, Divider, Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeDrawer, selectUI, toggleTheme} from "../../redux/features/ui/ui-slice";
import {selectAuth} from "../../redux/features/auth/auth-slice";
import {UTILS} from "../../utils/utils";
import SidebarLink from "../shared/sidebar-link";

import {
    ChevronRight,
    Close,
    DarkMode,
    DeleteForever,
    ExitToApp,
    Face,
    FaceOutlined,
    FeaturedPlayList,
    FeaturedPlayListOutlined,
    Home,
    HomeOutlined,
    Info,
    InfoOutlined,
    LightMode,
    Settings,
    SettingsOutlined,
    Videocam,
    VideocamOutlined,
    WatchLater,
    WatchLaterOutlined
} from "@mui/icons-material";
import {red} from "@mui/material/colors";
import {Link} from "react-router-dom";
import React from "react";

const SidebarContent = () => {

    const {activePath, themeVariant} = useSelector(selectUI);
    const {authData} = useSelector(selectAuth);

    const dispatch = useDispatch();

    return (
        <Box sx={{minHeight: '100vh', minWidth: "80vw", py: 3}}>
            <Stack divider={<Divider variant="fullWidth"/>} direction="column" spacing={2}>
                <Stack sx={{px: 4}} direction="row" alignItems="center" justifyContent="space-between">
                    {themeVariant === 'light' ? (
                        <DarkMode
                            onClick={() => dispatch(toggleTheme())}
                            sx={{
                                cursor: 'pointer',
                                color: 'secondary.main',
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
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
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                                padding: 1,
                                fontSize: 18,
                                backgroundColor: 'light.secondary'
                            }}/>
                    )}

                    <Close
                        onClick={() => dispatch(closeDrawer())}
                        sx={{
                            cursor: 'pointer',
                            color: 'secondary.main',
                            borderTopRightRadius: 32,
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 32,
                            borderTopLeftRadius: 32,
                            padding: 1,
                            fontSize: 18,
                            backgroundColor: 'light.secondary'
                        }}/>

                </Stack>
                {
                    authData && (
                        <Stack sx={{px: 4}} direction="column" spacing={1}>
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
                                <Typography sx={{color: 'secondary.main'}}
                                            variant="h2">{UTILS.getInitials(authData.fullName)}</Typography>
                            </Avatar>
                            <Typography sx={{color: 'text.primary'}} variant="h6">{authData.fullName}</Typography>
                            <Typography sx={{color: 'text.primary'}} variant="body2">{authData.username}</Typography>
                        </Stack>
                    )
                }

                <Stack direction="column">
                    <SidebarLink
                        active={activePath === '/'}
                        label="Home"
                        path="/"
                        icon={activePath === '/' ? (
                            <Home
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <HomeOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )}
                    />

                    <SidebarLink
                        active={activePath === '/our-plan'}
                        label="Our Plan"
                        path="/our-plan"
                        icon={activePath === '/our-plan' ? (
                            <Videocam
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <VideocamOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )
                        }
                    />
                    <SidebarLink
                        active={activePath === '/about-us'}
                        label="About Us"
                        path="/about-us"
                        icon={activePath === '/about-us' ? (
                            <Info
                                sx={{
                                    cursor: 'pointer',
                                    color: 'secondary.main',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18,
                                    backgroundColor: 'light.secondary'
                                }}/>
                        ) : (
                            <InfoOutlined
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.secondary',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    padding: 1,
                                    fontSize: 18
                                }}/>
                        )
                        }
                    />
                </Stack>
                {authData ? (
                    <React.Fragment>
                        <Stack direction="column">
                            <Link to="/trailer/new" style={{textDecoration: 'none', marginLeft: 8, marginRight: 8}}>
                                <Button
                                    color="secondary"
                                    fullWidth={true}
                                    sx={{
                                        textTransform: 'capitalize',
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 0,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                    }}
                                    variant="contained"
                                    disableElevation={true}>
                                    Create Trailer
                                </Button>
                            </Link>
                        </Stack>
                        <Stack direction="column">
                            <SidebarLink
                                active={activePath === '/profile'}
                                label="Profile"
                                path="/profile"
                                icon={activePath === '/profile' ? (
                                    <Face
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'secondary.main',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18,
                                            backgroundColor: 'light.secondary'
                                        }}/>
                                ) : (
                                    <FaceOutlined
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'text.secondary',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18
                                        }}/>
                                )}
                            />

                            <SidebarLink
                                active={activePath === '/settings'}
                                label="Settings"
                                path="/settings"
                                icon={activePath === '/settings' ? (
                                    <Settings
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'secondary.main',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18,
                                            backgroundColor: 'light.secondary'
                                        }}/>
                                ) : (
                                    <SettingsOutlined
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'text.secondary',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18
                                        }}/>
                                )
                                }
                            />

                            <SidebarLink
                                active={activePath === '/plans/me'}
                                label="My Trailers"
                                path="/trailers/me"
                                icon={activePath === '/plans/me' ? (
                                    <Videocam
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'secondary.main',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18,
                                            backgroundColor: 'light.secondary'
                                        }}/>
                                ) : (
                                    <VideocamOutlined
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'text.secondary',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18
                                        }}/>
                                )}
                            />

                            <SidebarLink
                                active={activePath === '/watch-later'}
                                label="Watch Later"
                                path="/watch-later"
                                icon={activePath === '/watch-later' ? (
                                    <WatchLater
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'secondary.main',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18,
                                            backgroundColor: 'light.secondary'
                                        }}/>
                                ) : (
                                    <WatchLaterOutlined
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'text.secondary',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18
                                        }}/>
                                )}
                            />


                            <SidebarLink
                                active={activePath === '/playlists'}
                                label="Playlists"
                                path="/playlists"
                                icon={activePath === '/playlists' ? (
                                    <FeaturedPlayList
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'secondary.main',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18,
                                            backgroundColor: 'light.secondary'
                                        }}/>
                                ) : (
                                    <FeaturedPlayListOutlined
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'text.secondary',
                                            borderTopRightRadius: 32,
                                            borderBottomRightRadius: 0,
                                            borderBottomLeftRadius: 32,
                                            borderTopLeftRadius: 32,
                                            padding: 1,
                                            fontSize: 18
                                        }}/>
                                )}
                            />

                        </Stack>
                        <Stack direction="column">
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Button
                                    size="large"
                                    sx={{
                                        px: 3,
                                        justifyContent: 'flex-start',
                                        color: 'secondary.main',
                                        textTransform: 'capitalize'
                                    }}
                                    fullWidth={true}
                                    variant="text"
                                    startIcon={
                                        <ExitToApp
                                            sx={{
                                                cursor: 'pointer',
                                                color: 'secondary.main',
                                                padding: 1,
                                                fontSize: 18
                                            }}/>}>
                                    Logout
                                </Button>

                                <ChevronRight
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'secondary.main',
                                        borderRadius: '1%',
                                        padding: 1,
                                        fontSize: 18,
                                    }}/>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Button
                                    size="large"
                                    sx={{
                                        px: 3,
                                        justifyContent: 'flex-start',
                                        color: red[800],
                                        textTransform: 'capitalize'
                                    }}
                                    fullWidth={true}
                                    variant="text"
                                    startIcon={
                                        <DeleteForever
                                            sx={{
                                                cursor: 'pointer',
                                                color: red[800],
                                                padding: 1,
                                                fontSize: 18
                                            }}/>}>
                                    Disable Account
                                </Button>
                                <ChevronRight
                                    sx={{
                                        cursor: 'pointer',
                                        color: red[800],
                                        borderRadius: '1%',
                                        padding: 1,
                                        fontSize: 18,
                                    }}/>
                            </Stack>
                        </Stack>
                    </React.Fragment>
                ) : (
                    <Link
                        to="/auth/login"
                        style={{textDecoration: 'none', marginLeft: 8, marginRight: 8}}>
                        <Button
                            color="secondary"
                            fullWidth={true}
                            sx={{
                                textTransform: 'capitalize',
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                            }}
                            variant="contained"
                            disableElevation={true}>
                            Login
                        </Button>
                    </Link>
                )}
            </Stack>
        </Box>
    )
}

export default SidebarContent;
