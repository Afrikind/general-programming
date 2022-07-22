import {Link} from "react-router-dom";
import {Button, Stack} from "@mui/material";
import {useDispatch} from "react-redux";
import {changePath, closeDrawer} from "../../redux/features/ui/ui-slice";
import {ChevronRight} from "@mui/icons-material";

const SidebarLink = ({path, label, active, icon}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changePath(path));
        dispatch(closeDrawer());
    }
    return (
        <Link to={path} onClick={handleClick} style={{textDecoration: 'none'}}>
            <Stack
                sx={{
                    justifyContent: 'flex-start',
                    borderLeftWidth: active ? 3 : 0,
                    borderLeftStyle: active ? 'solid' : false,
                    borderLeftColor: active ? 'secondary.main' : false,
                    backgroundColor: active ? 'light.secondary' : false,
                    px: 2
                }}
                direction="row" justifyContent="space-between" alignItems="center">
                <Button
                    fullWidth={true}
                    startIcon={icon}
                    size="large"
                    variant="text"
                    sx={{
                        borderRadius: 0,
                        justifyContent: 'flex-start',
                        color: active ? 'secondary.main' : 'text.primary',
                        textTransform: 'capitalize',
                    }}>
                    {label}
                </Button>
                <ChevronRight
                    sx={{
                        cursor: 'pointer',
                        color: active ? 'secondary.main': 'text.primary',
                        borderRadius: '1%',
                        padding: 1,
                        fontSize: 24,
                    }}/>
            </Stack>
        </Link>
    )
}

export default SidebarLink;