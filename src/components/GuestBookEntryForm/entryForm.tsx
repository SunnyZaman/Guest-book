import React from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './entryFormStyle';

function EntryForm() {
    const classes = useStyles();
    return (
        <form noValidate className={classes.formContainer} autoComplete="off">
            <TextField label="Name" name="name" fullWidth/>
            <TextField multiline rows={3} label="Content" name="content" fullWidth/>
            <TextField label="Name" name="name" fullWidth/>

        </form>
    )
}
export default EntryForm;