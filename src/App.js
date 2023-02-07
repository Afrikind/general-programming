import './App.css';
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice";
import {ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import {THEMES} from "./utils/themes";
import HomePage from "./pages/home/home-page";
import NotFoundPage from "./pages/404/not-found-page";
import AboutPage from "./pages/about/about-page";
import SettingsPage from "./pages/profile/settings-page";
import ProfilePage from "./pages/profile/profile-page";
import LoginPage from "./pages/authentication/login-page";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import RegisterPage from "./pages/authentication/register-page";
import RequireAuth from "./components/shared/require-auth";
import AgroBrosPage from "./pages/menus/AgroBros-page";
import OurPlanPage from "./pages/plans/our-plan-page";
import OurServicesPage from "./pages/menus/our-Services-page";

function App() {
    const {themeVariant} = useSelector(selectUI);
    const theme = themeVariant === 'dark' ? THEMES.darkTheme : THEMES.lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route element={<HomePage/>} exact={true} path="/"/>
                <Route element={<AgroBrosPage/>} exact={true} path="/Agrobros"/>
                <Route element={<RequireAuth><ProfilePage/></RequireAuth>} exact={true} path="/profile"/>
                <Route element={<RequireAuth><SettingsPage/></RequireAuth>} exact={true} path="/settings"/>
                <Route element={<OurPlanPage/>} exact={true} path="/our-plan"/>
                <Route element={<OurServicesPage/>} exact={true} path="/our-meals"/>
                <Route element={<AboutPage/>} exact={true} path="/about-us"/>
                <Route element={<RegisterPage/>} exact={true} path="/auth/register"/>
                <Route element={<LoginPage/>} exact={true} path="/auth/login"/>
                <Route element={<ResetPasswordPage/>} exact={true} path="/auth/reset-password"/>
                <Route element={<ForgotPasswordPage/>} exact={true} path="/auth/forgot-password"/>
                <Route element={<NotFoundPage/>} exact={true} path="*"/>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
