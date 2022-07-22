import {
    Box,
    Button,
    CircularProgress,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import loginLogo from "./../../assets/images/forgot-password.png";
import {useFormik} from "formik";
import * as yup from "yup";
import "yup-phone";
import {LoadingButton} from "@mui/lab";
import {KeyboardArrowLeft} from "@mui/icons-material";
import {useNavigate} from "react-router";

const ForgotPasswordPage = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: (values, formikHelpers) => {
            console.log(values, formikHelpers);
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            email: yup.string().email('Enter a valid email number').required('email required'),
        })
    });

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
            <Box sx={{flex: 1, display: 'flex', alignItems: 'center', backgroundColor: 'background.paper'}}>
                <Container>
                    <Grid container={true} justifyContent="center">
                        <Grid item={true} xs={12} lg={8}>
                            <Stack
                                sx={{py: 4}}
                                direction="column"
                                justifyContent="space-between"
                                spacing={2}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Stack direction="column" spacing={4}>
                                        <Box mb={2}>
                                            <Button
                                                size="large"
                                                sx={{textTransform: 'capitalize'}}
                                                onClick={() => navigate(-1)}
                                                variant="text"
                                                color="secondary"
                                                startIcon={<KeyboardArrowLeft/>}>
                                                Back
                                            </Button>
                                        </Box>

                                        <Typography mb={2} variant="h4" sx={{color: 'secondary.main'}}>
                                            The Book Station
                                        </Typography>

                                        <Stack direction="row" spacing={2}>
                                            <Typography variant="h6" sx={{color: 'secondary.main'}}>
                                                Forgot
                                            </Typography>
                                            <Typography variant="h6" sx={{color: 'text.primary'}}>
                                                Password
                                            </Typography>
                                        </Stack>

                                        <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                            What's the email number associated with your account?
                                        </Typography>

                                        <Box>
                                            <Typography
                                                mb={1} variant="body2"
                                                sx={{
                                                    color: 'secondary.main',
                                                    fontWeight: 'bold'
                                                }}>
                                                Email
                                            </Typography>
                                            <FormControl fullWidth={true} variant="outlined">
                                                <OutlinedInput
                                                    fullWidth={true}
                                                    value={formik.values.email}
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    placeholder="Enter email"
                                                    required={true}
                                                    size="medium"
                                                    margin="dense"
                                                />
                                                {formik.touched.email && formik.errors.email && (
                                                    <FormHelperText
                                                        error={true}>
                                                        {formik.errors.email}
                                                    </FormHelperText>
                                                )}
                                            </FormControl>
                                        </Box>

                                        <LoadingButton
                                            type="submit"
                                            size="large"
                                            color="secondary"
                                            sx={{
                                                textTransform: 'capitalize',
                                                py: 1.2,
                                                borderTopRightRadius: 32,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 32,
                                                borderTopLeftRadius: 32,
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
                                            {formik.isSubmitting ? 'Sending...' : 'Send reset email'}
                                        </LoadingButton>
                                    </Stack>
                                </form>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default ForgotPasswordPage;
