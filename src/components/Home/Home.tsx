import React from 'react';
import { useStoreState } from '../../hooks';
import { Card, CardContent, Typography } from '@material-ui/core';
import EntryForm from '../GuestBookEntryForm/entryForm';
function Home() {
    const entries = useStoreState(state => state.guestbook.entries);
    console.log(entries);
    return (
        <div>
            <EntryForm/>
            {
                entries.map((entry) => (
                    <Card key={entry.id}>
                        <CardContent>
                            <Typography variant="h2">
                                {entry.name}
                            </Typography>
                            <Typography variant="body1">
                                {entry.content}
                            </Typography>
                            <Typography variant="caption">
                                {entry.submitted ? entry.submitted.toLocaleDateString(): ''}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
};
export default Home;