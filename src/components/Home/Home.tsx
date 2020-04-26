import React from 'react';
import { useStoreState } from '../../hooks';
import { Card, CardContent, Typography } from '@material-ui/core';

function Home() {
    const entries = useStoreState(state => state.guestbook.entries);
    console.log(entries);
    return (
        <div>
            {
                entries.map((entry) => (
                    <Card>
                        <CardContent>
                            <Typography variant="h2">
                                {entry.name}
                            </Typography>
                            <Typography variant="body1">
                                {entry.content}
                            </Typography>
                            <Typography variant="caption">
                                {entry.submitted.toLocaleDateString()}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
};
export default Home;