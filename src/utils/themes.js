import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: 'Gilroy, GoogleSans, EuclidCircularB, EuclidCircularB'
    },
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#dc143c'
        },
        text: {
            primary: '#1a536b',
            secondary: '#b0b7c9',
            accent: '#f76653',
            title: '#384054'
        },
        background: {
            default: 'rgb(228, 235, 241)',
            paper: '#ffffff'
        },
        light: {
            secondary: 'rgba(247,102,83,0.3)'
        },
        mode: "light"
    },
    shape: {
        borderRadius: 8
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: 'Gilroy, GoogleSans, EuclidCircularB, EuclidCircularB'
    },
    palette: {
        primary: {
            main: '#212121'
        },
        secondary: {
            main: '#dc143c'
        },
        text: {
            primary: '#cfd1d6',
            secondary: '#717488',
            accent: '#f76653',
            title: '#dcdce0'
        },
        background: {
            default: '#212335',
            paper: '#27273f'
        },
        light: {
            secondary: 'rgba(247,102,83,0.3)'
        },
        mode: 'dark'
    },
    shape: {
        borderRadius: 32
    }
});

export const THEMES = {lightTheme, darkTheme};
