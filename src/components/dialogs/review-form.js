import {Dialog, DialogContent} from "@mui/material";

const ReviewForm = ({open, handleClose, children}) => {
    return (
        <Dialog
            sx={{
                borderTopRightRadius: 32,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 32,
                borderTopLeftRadius: 32,
            }}
            open={open}
            onClose={handleClose}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default ReviewForm;