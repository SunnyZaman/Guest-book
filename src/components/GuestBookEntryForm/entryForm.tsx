import React from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import GuestBookEntry from '../../interfaces/GuestBookEntry';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useStoreActions } from '../../hooks';
import useStyles from './entryFormStyle';

const GuestBookEntrySchema = yup.object().shape({
    name: yup.string().trim().required('Required'),
    content: yup.string().trim()
        .min(10, 'Must be at least 10 characters')
        .max(200, 'Can be no longer than 200 characters')
        // .matches(/Kind Regards\.$/, 'Content must end with "Kind Regards.')
        .required('Required')
})
function EntryForm() {
    const classes = useStyles();
    const addEntry = useStoreActions((state) => state.guestbook.addEntry);
    const { register, handleSubmit, errors, reset } = useForm<GuestBookEntry>({
        validationSchema: GuestBookEntrySchema
    });
    const onSubmit = (data: GuestBookEntry): void => {
        console.log(data);
        addEntry(data);
        reset();
    };
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className={classes.formContainer} autoComplete="off">
            <TextField inputRef={register}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
                label="Name" name="name" fullWidth variant="outlined" />
            <TextField inputRef={register}
                error={!!errors.content}
                helperText={errors.content ? errors.content.message : ''}
                multiline rows={3} label="Content" name="content" fullWidth variant="outlined" />
            <Box display="flex" justifyContent="flex-end">
                <Button type="submit" variant="contained" color="primary">Add Entry</Button>
            </Box>
        </form>

    )
}
export default EntryForm;