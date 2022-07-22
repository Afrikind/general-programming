import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AUTH_ACTION_CREATORS, selectAuth} from "../../redux/features/auth/auth-slice";
import Splash from "./splash";
import {Navigate, useLocation, useNavigate} from "react-router";

const RequireAuth = ({children}) => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {authLoading, token} = useSelector(selectAuth);

    useEffect(() => {
        dispatch(AUTH_ACTION_CREATORS.getProfile({token, navigate}));
    }, [token]);


    if (authLoading) {
        return <Splash/>
    }

    if (!authLoading && !token) {
        return <Navigate to="/auth/login" state={{pathname}}/>
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}


export default RequireAuth;
