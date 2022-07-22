import {Box} from "@mui/material";

const LoadingItem = ({loading, item, skeleton, ...rest}) => {
    return (
        <Box sx={{width: '100%', height: 'auto'}} {...rest}>
            {loading ? skeleton : item}
        </Box>
    )
}

export default LoadingItem;