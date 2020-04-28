import { Action, Thunk } from 'easy-peasy';
import GuestBookEntry from './GuestBookEntry';

export default interface GuestBookModel {
    entries: GuestBookEntry[];
    setEntries: Action<GuestBookModel, GuestBookEntry[]>;
    addEntry: Action<GuestBookModel, GuestBookEntry>;
    createEntry: Thunk<GuestBookModel, GuestBookEntry>;
    getEntries: Thunk<GuestBookModel>;
}