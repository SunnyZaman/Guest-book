import { action } from 'easy-peasy';
import GuestBookModel from '../interfaces/GuestBookModel';

const GuestBook: GuestBookModel = {
entries: [{
    id: Date.now(),
    name:'Sunny',
    content:'Hello World',
    submitted: new Date(),
}],
addEntry: action((state, entry)=>{
    state.entries.push(entry);
})
};

export default GuestBook;