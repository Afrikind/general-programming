import {Button, Dialog, DialogActions, DialogContent, Divider, Grid, Stack, Typography} from "@mui/material";
import {Cancel, Delete, WarningAmber} from "@mui/icons-material";
import React from "react";

const ConfirmationDialog = ({open, onClose, message, handleDelete}) => {

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" justifyContent="center">
                        <WarningAmber
                            sx={{
                                backgroundColor: 'light.secondary',
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 0,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32
                            }}/>
                    </Stack>
                    <Typography variant="body1" sx={{color: 'text.primary'}}>
                        {message}
                    </Typography>
                </Stack>
            </DialogContent>
            <Divider variant="fullWidth" light={true} />
            <DialogActions>
                <Grid container={true}>
                    <Grid item={true} xs={6}>
                        <Button
                            color="secondary"
                            size="small"
                            variant="text"
                            sx={{textTransform: 'capitalize'}}
                            startIcon={<Cancel color="secondary"/>}>
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item={true} xs={6}>
                        <Button
                            onClick={handleDelete}
                            color="error"
                            size="small"
                            variant="text"
                            sx={{textTransform: 'capitalize'}}
                            startIcon={<Delete color="error"/>}>
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationDialog;