import { action, thunk } from 'easy-peasy';
import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
    entries: [],
    setEntries: action((state, entries)=>{
        state.entries = entries;
    }),
    addEntry: action((state, entry)=>{
        state.entries.unshift(entry);
    }),
    createEntry: thunk(async(state, entry) => {
        const response = await fetch('http://localhost:5200/entries',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(entry)
        });
        const result = await response.json();
        console.log(result);
        state.addEntry(result);
    }),
    getEntries: thunk(async(state)=>{
        const response = await fetch('http://localhost:5200/entries');
        const entries = await response.json();
        state.setEntries(entries);
    })
};

export default GuestBook;