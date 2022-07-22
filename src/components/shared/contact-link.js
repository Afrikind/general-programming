import {Stack, Link} from "@mui/material";

const ContactLink = ({startIcon, endIcon, text, link}) => {
    return (
        <Link underline="none" href={link}>
            <Stack justifyContent="space-between" alignItems="center" direction="row" spacing={2}>
                <Stack spacing={3} direction="row" alignItems="center">
                    {startIcon} {text}
                </Stack>
                {endIcon}
            </Stack>
        </Link>
    )

}
export default ContactLink;