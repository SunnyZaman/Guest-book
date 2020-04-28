import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from '../../hooks';
import { Card, CardContent, Typography } from '@material-ui/core';
import EntryForm from '../GuestBookEntryForm/entryForm';
import useStyles from './homeStyle';
function Home() {
    const entries = useStoreState(state => state.guestbook.entries);
    const getEntries = useStoreActions((state) => state.guestbook.getEntries);
    const classes = useStyles();

    useEffect(() =>{
        getEntries(); //call once
    },[])
    console.log(entries);
    return (
        <div>
            <EntryForm/>
            {
                entries.map((entry) => (
                    <Card  className={classes.entryCard} key={entry.id}>
                        <CardContent>
                            <Typography variant="h2">
                                {entry.name}
                            </Typography>
                            <Typography variant="body1">
                                {entry.content}
                            </Typography>
                            <Typography variant="caption">
                                {entry.submitted}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
};
export default Home;