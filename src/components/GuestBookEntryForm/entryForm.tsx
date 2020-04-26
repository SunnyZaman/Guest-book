import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import useStyles from './entryFormStyle';

function EntryForm() {
    const classes = useStyles();
    return (
        <form noValidate className={classes.formContainer} autoComplete="off">
            <TextField label="Name" name="name" fullWidth variant="outlined" />
            <TextField multiline rows={3} label="Content" name="content" fullWidth variant="outlined" />
            <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary">Add Entry</Button>
            </Box>
        </form>

    )
}
export default EntryForm;