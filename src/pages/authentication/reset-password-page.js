import {
    Box,
    CircularProgress,
    Container,
    FormControl,
    FormHelperText,
    InputAdornment,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import loginLogo from "./../../assets/images/reset-password.png";
import {useFormik} from "formik";
import * as yup from "yup";
import "yup-phone";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import {LoadingButton} from "@mui/lab";

const ResetPasswordPage = () => {

    const formik = useFormik({
        initialValues: {
            confirmPassword: '',
            password: '',
            currentPassword: ''
        },
        onSubmit: (values, formikHelpers) => {
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            currentPassword: yup.string().required('Password required'),
            password: yup.string().required('Password required'),
            confirmPassword: yup.string().required('Field required').oneOf([yup.ref('password'), null], 'Passwords must match')
        })
    });

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box
            sx={{
                maxWidth: '100vw',
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: 'background.default',
                overflow: 'hidden'
            }}>
            <Box sx={{display: {xs: 'none', lg: 'block'}, flex: 1, maxHeight: '100vh'}}>
                <Stack sx={{height: '100%'}} justifyContent="center" alignItems="center">
                    <img
                        style={{
                            maxHeight: '100vh',
                            width: '50%',
                            height: '50%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                        alt=""
                        src={loginLogo}
                    />
                </Stack>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    overflowY: {xs: 'scroll', lg: 'hidden'},
                    backgroundColor: 'background.paper'
                }}>
                <Container maxWidth="sm">
                    <form onSubmit={formik.handleSubmit}>
                        <Stack direction="column" spacing={3}>
                            <Typography mb={2} variant="h4" sx={{color: 'secondary.main'}}>
                                The Book Station
                            </Typography>

                            <Stack mb={2} direction="row" spacing={2}>
                                <Typography variant="h6" sx={{color: 'secondary.main'}}>
                                    Reset
                                </Typography>
                                <Typography variant="h6" sx={{color: 'text.primary'}}>
                                    Password
                                </Typography>
                            </Stack>

                            <Typography mb={2} variant="body1" sx={{color: 'text.secondary'}}>
                                Choose a strong password to secure your account
                            </Typography>
                            <Box>
                                <Typography
                                    mb={1} variant="body2"
                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                    Current Password
                                </Typography>
                                <FormControl fullWidth={true} variant="outlined">
                                    <OutlinedInput
                                        fullWidth={true}
                                        sx={{}}
                                        value={formik.values.currentPassword}
                                        id="currentPassword"
                                        name="currentPassword"
                                        type={showPassword ? 'text' : 'password'}
                                        helperText={formik.touched.currentPassword && formik.errors.currentPassword}
                                        error={formik.touched.currentPassword && formik.errors.currentPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Enter current password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                {showPassword ?
                                                    <VisibilityOff
                                                        onClick={() => setShowPassword(false)}
                                                        sx={{
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 24,
                                                        }}
                                                    /> :
                                                    <Visibility
                                                        onClick={() => setShowPassword(true)}
                                                        sx={{
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 24,
                                                        }}
                                                    />}
                                            </InputAdornment>
                                        }
                                        notched={true}
                                        required={true}
                                        size="medium"
                                        margin="dense"
                                    />
                                    {formik.touched.currentPassword && formik.errors.currentPassword && (
                                        <FormHelperText
                                            error={true}>
                                            {formik.errors.currentPassword}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Box>

                            <Box>
                                <Typography
                                    mb={1}
                                    variant="body2"
                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                    New Password
                                </Typography>
                                <FormControl fullWidth={true} variant="outlined">
                                    <OutlinedInput
                                        fullWidth={true}
                                        sx={{}}
                                        id="password"
                                        value={formik.values.password}
                                        name="password"
                                        notched={true}
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                {showPassword ?
                                                    <VisibilityOff
                                                        onClick={() => setShowPassword(false)}
                                                        sx={{
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 24,
                                                        }}
                                                    /> :
                                                    <Visibility
                                                        onClick={() => setShowPassword(true)}
                                                        sx={{
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 24,
                                                        }}
                                                    />}
                                            </InputAdornment>
                                        }
                                        helperText={formik.touched.password && formik.errors.password}
                                        error={formik.touched.password && formik.errors.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Enter password"
                                        required={true}
                                        size="medium"
                                        margin="dense"
                                    />
                                    {formik.touched.password && formik.errors.password && (
                                        <FormHelperText
                                            error={true}>
                                            {formik.errors.password}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Box>

                            <Box>
                                <Typography
                                    mb={1}
                                    variant="body2"
                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                    Confirm Password
                                </Typography>
                                <FormControl fullWidth={true} variant="outlined">
                                    <OutlinedInput
                                        fullWidth={true}
                                        In
                                        sx={{}}
                                        id="confirmPassword"
                                        value={formik.values.confirmPassword}
                                        name="confirmPassword"
                                        notched={true}
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                {showPassword ?
                                                    <VisibilityOff
                                                        onClick={() => setShowPassword(false)}
                                                        sx={{
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 24,
                                                        }}
                                                    /> :
                                                    <Visibility
                                                        onClick={() => setShowPassword(true)}
                                                        sx={{
                                                            borderTopRightRadius: 32,
                                                            borderBottomRightRadius: 0,
                                                            borderBottomLeftRadius: 32,
                                                            borderTopLeftRadius: 32,
                                                            cursor: 'pointer',
                                                            color: 'secondary.main',
                                                            borderRadius: '100%',
                                                            padding: 1,
                                                            fontSize: 24,
                                                        }}
                                                    />}
                                            </InputAdornment>
                                        }
                                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Confirm Password"
                                        required={true}
                                        size="medium"
                                        margin="dense"
                                    />
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                        <FormHelperText
                                            error={true}>
                                            {formik.errors.confirmPassword}
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </Box>

                            <LoadingButton
                                size="large"
                                color="secondary"
                                sx={{
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    textTransform: 'capitalize',
                                    py: 1.2
                                }}
                                loadingPosition="start"
                                startIcon={formik.isSubmitting ?
                                    <CircularProgress color="secondary"/> : null}
                                loadingIndicator={formik.isSubmitting ?
                                    <CircularProgress color="secondary"/> : null}
                                loading={formik.isSubmitting}
                                fullWidth={true}
                                variant="contained"
                                disableElevation={true}>
                                {formik.isSubmitting ? 'Resetting...' : 'Reset Password'}
                            </LoadingButton>
                        </Stack>
                    </form>
                </Container>
            </Box>
        </Box>
    )
}

export default ResetPasswordPage;
