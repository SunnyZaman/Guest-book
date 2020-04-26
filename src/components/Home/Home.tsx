import React from 'react';
import { useStoreState } from '../../hooks';

function Home() {
    const entries = useStoreState(state => state.guestbook.entries);
    console.log(entries);
    return (
        <h1>Home</h1>
    )
};
export default Home;