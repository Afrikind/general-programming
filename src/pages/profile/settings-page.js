import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle, Box,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Divider,
    FormControl,
    Grid, IconButton, InputAdornment,
    InputLabel,
    LinearProgress,
    MenuItem, OutlinedInput,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import {AUTH_ACTION_CREATORS, selectAuth} from "../../redux/features/auth/auth-slice";
import {useFormik} from "formik";
import * as yup from "yup";
import "yup-phone";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const SettingsPage = () => {

    const {authLoading, token, authData, authError} = useSelector(selectAuth);

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstName: authData?.firstName,
            lastName: authData?.lastName,
            email: authData?.email,
            username: authData?.username,
            phoneNumber: authData?.phoneNumber,
            gender: authData?.gender
        },
        validationSchema: yup.object().shape({
            firstName: yup.string().required('Field required'),
            lastName: yup.string().required('Field required'),
            email: yup.string().email('Invalid email').required('Field required'),
            username: yup.string().required('Field required'),
            phoneNumber: yup.string().phone('Invalid phone').required('Field required'),
            gender: yup.string().oneOf(['Male', 'Female']).required('Field required')
        }),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values, {setSubmitting, resetForm}) => {
            setSubmitting(true);
            dispatch(AUTH_ACTION_CREATORS.updateProfile({...values, token, setSubmitting}));
        }
    });


    const updatePasswordFormik = useFormik({
        initialValues: {
            password: '',
            currentPassword: '',
            confirmPassword: '',
        },
        validationSchema: yup.object().shape({
            password: yup.string().required('Field required'),
            currentPassword: yup.string().required('Field required'),
            confirmPassword: yup.string().required('Field required'),
        }),
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values, {setSubmitting, resetForm}) => {
            setSubmitting(true);
            dispatch(AUTH_ACTION_CREATORS.updateProfile({...values, token, setSubmitting}));
        }
    });

    console.log(authData.gender, formik.values.gender)

    return (
        <Layout>
            {authLoading && <LinearProgress variant="query" color="primary"/>}
            <Box sx={{py: 3}}>
                <Container>
                    <Grid
                        sx={{my: 4}}
                        container={true}
                        justifyContent="space-between"
                        spacing={2}>
                        <Grid item={true} xs={12} md="auto">
                            <Typography sx={{color: 'text.primary'}} variant="h4">
                                Update Profile
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider light={true} variant="fullWidth" sx={{my: 4}}/>

                    <Grid
                        spacing={2}
                        container={true}
                        justifyContent="space-between">
                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={0}
                                  sx={{
                                      borderTopRightRadius: 32,
                                      borderBottomRightRadius: 0,
                                      borderBottomLeftRadius: 32,
                                      borderTopLeftRadius: 32,
                                  }}>
                                {authLoading && <LinearProgress variant="query" color="primary"/>}
                                <CardContent>
                                    {
                                        authError && (
                                            <Alert sx={{mb: 2}} severity="error">
                                                <AlertTitle>{authError}</AlertTitle>
                                            </Alert>
                                        )
                                    }
                                    <form onSubmit={formik.handleSubmit}>
                                        <Stack spacing={2} direction="column">
                                            <Typography sx={{color: 'text.primary'}} variant="h6">
                                                Update Profile
                                            </Typography>
                                            <TextField
                                                label="First Name"
                                                fullWidth={true}
                                                name="lastName"
                                                required={true}
                                                variant="outlined"
                                                value={formik.values.lastName}
                                                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                                                helperText={formik.errors.lastName}
                                                type="text"
                                                size="medium"
                                                placeholder="Enter first name"
                                                onChange={formik.handleChange}
                                            />

                                            <TextField
                                                label="Last Name"
                                                fullWidth={true}
                                                name="lastName"
                                                required={true}
                                                variant="outlined"
                                                value={formik.values.lastName}
                                                error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                                                helperText={formik.errors.lastName}
                                                type="text"
                                                size="medium"
                                                placeholder="Enter last name"
                                                onChange={formik.handleChange}
                                            />

                                            <TextField
                                                label="Email"
                                                fullWidth={true}
                                                name="email"
                                                required={true}
                                                variant="outlined"
                                                value={formik.values.email}
                                                error={Boolean(formik.touched.email && formik.errors.email)}
                                                helperText={formik.errors.email}
                                                type="email"
                                                size="medium"
                                                placeholder="Enter email"
                                                onChange={formik.handleChange}
                                            />

                                            <TextField
                                                label="Username"
                                                fullWidth={true}
                                                name="username"
                                                required={true}
                                                variant="outlined"
                                                value={formik.values.username}
                                                error={Boolean(formik.touched.username && formik.errors.username)}
                                                helperText={formik.errors.username}
                                                type="text"
                                                size="medium"
                                                placeholder="Enter username"
                                                onChange={formik.handleChange}
                                            />


                                            <TextField
                                                label="Phone"
                                                fullWidth={true}
                                                name="phoneNumber"
                                                required={true}
                                                variant="outlined"
                                                value={formik.values.phoneNumber}
                                                error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                                                helperText={formik.errors.phoneNumber}
                                                type="tel"
                                                size="medium"
                                                placeholder="Enter phone number"
                                                onChange={formik.handleChange}
                                            />

                                            <FormControl variant="outlined" fullWidth={true}>
                                                <InputLabel htmlFor="genre">Gender</InputLabel>
                                                <Select
                                                    id="genre"
                                                    margin="dense"
                                                    defaultValue={formik.values.gender}
                                                    color="secondary"
                                                    fullWidth={true}
                                                    elevation={1}
                                                    onChange={formik.handleChange}
                                                    value={formik.values.gender}
                                                    label="Select Role"
                                                    variant="outlined">
                                                    <MenuItem value="male" key="male">Male</MenuItem>
                                                    <MenuItem value="female" key="female">Female</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <LoadingButton
                                                loading={authLoading}
                                                loadingIndicator={<CircularProgress size="small" color="secondary"/>}
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    py: 1.5,
                                                    borderTopRightRadius: 32,
                                                    borderBottomRightRadius: 0,
                                                    borderBottomLeftRadius: 32,
                                                    borderTopLeftRadius: 32,
                                                }}
                                                size="large"
                                                color="secondary"
                                                fullWidth={true}
                                                disableElevation={true}
                                                variant="contained">
                                                Update Profile
                                            </LoadingButton>
                                        </Stack>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={6}>
                            <Card elevation={0} sx={{
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                            }}>
                                {authLoading && <LinearProgress variant="query" color="primary"/>}
                                <CardContent>
                                    {
                                        authError && (
                                            <Alert severity="error">
                                                <AlertTitle>{authError}</AlertTitle>
                                            </Alert>
                                        )
                                    }

                                    <form onSubmit={updatePasswordFormik.handleSubmit}>
                                        <Stack mb={3} spacing={2} direction="column">
                                            <Typography sx={{color: 'text.primary'}} variant="h5">
                                                Update Password
                                            </Typography>
                                            <FormControl variant="outlined">
                                                <InputLabel htmlFor="currentPassword">Current Password</InputLabel>
                                                <OutlinedInput
                                                    id="currentPassword"
                                                    label="Current Password"
                                                    fullWidth={true}
                                                    name="currentPassword"
                                                    required={true}
                                                    variant="outlined"
                                                    size="medium"
                                                    placeholder="Enter current password"
                                                    error={Boolean(updatePasswordFormik.errors.confirmPassword)}
                                                    type={passwordVisibility ? 'text' : 'password'}
                                                    value={updatePasswordFormik.values.currentPassword}
                                                    onChange={updatePasswordFormik.handleChange}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => setPasswordVisibility(!passwordVisibility)}
                                                                onMouseDown={() => setPasswordVisibility(!passwordVisibility)}
                                                                edge="end">
                                                                {passwordVisibility ? <VisibilityOff/> : <Visibility/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>

                                            <FormControl variant="outlined">
                                                <InputLabel htmlFor="password">New Password</InputLabel>
                                                <OutlinedInput
                                                    id="password"
                                                    label="Enter Password"
                                                    fullWidth={true}
                                                    name="password"
                                                    required={true}
                                                    size="medium"
                                                    placeholder="Enter a password"
                                                    variant="outlined"
                                                    error={Boolean(updatePasswordFormik.errors.password)}
                                                    type={passwordVisibility ? 'text' : 'password'}
                                                    value={updatePasswordFormik.values.password}
                                                    onChange={updatePasswordFormik.handleChange}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => setPasswordVisibility(!passwordVisibility)}
                                                                onMouseDown={() => setPasswordVisibility(!passwordVisibility)}
                                                                edge="end">
                                                                {passwordVisibility ? <VisibilityOff/> : <Visibility/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>

                                            <FormControl variant="outlined">
                                                <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                                                <OutlinedInput
                                                    id="confirmPassword"
                                                    label="Confirm Password"
                                                    fullWidth={true}
                                                    name="confirmPassword"
                                                    required={true}
                                                    placeholder="Confirm password"
                                                    variant="outlined"
                                                    size="medium"
                                                    error={Boolean(updatePasswordFormik.errors.password)}
                                                    type={passwordVisibility ? 'text' : 'password'}
                                                    value={updatePasswordFormik.values.confirmPassword}
                                                    onChange={updatePasswordFormik.handleChange}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => setPasswordVisibility(!passwordVisibility)}
                                                                onMouseDown={() => setPasswordVisibility(!passwordVisibility)}
                                                                edge="end"
                                                            >
                                                                {passwordVisibility ? <VisibilityOff/> : <Visibility/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Stack>

                                        <LoadingButton
                                            type="submit"
                                            onClick={updatePasswordFormik.handleSubmit}
                                            loading={authLoading}
                                            loadingIndicator={<CircularProgress color="secondary" size={20}/>}
                                            startIcon={authLoading && <CircularProgress color="secondary" size={20}/>}
                                            sx={{
                                                textTransform: 'capitalize',
                                                py: 1.5,
                                                borderTopRightRadius: 32,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 32,
                                                borderTopLeftRadius: 32,
                                            }}
                                            disableElevation={true}
                                            size="large"
                                            color="secondary"
                                            fullWidth={true}
                                            variant="contained">
                                            Change Password
                                        </LoadingButton>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default SettingsPage;