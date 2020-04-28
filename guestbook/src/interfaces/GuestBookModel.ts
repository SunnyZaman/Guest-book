import { Action } from 'easy-peasy';
import GuestBookEntry from './GuestBookEntry';

export default interface GuestBookModel {
    entries: GuestBookEntry[];
    addEntry: Action<GuestBookModel, GuestBookEntry>;
}