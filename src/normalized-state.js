import { schema, normalize } from 'normalizr';
import defaultState from './default-state';

const user = new schema.Entity('users');
const card = new schema.Entity('cards', { assignTo: user });
const list = new schema.Entity('lists', {
    cards: [card]
});

const normalizedLists = normalize(defaultState.list, [list]);
const normalizedUsers = normalize(defaultState.user, [user]);

export const lists = {
    entities: normalizedLists.entities.lists,
    ids: normalizedLists.result
}

export const users = {
    entities: normalizedUsers.entities.users,
    ids: normalizedUsers.result
}

export const cards = {
    entities: normalizedLists.entities.cards,
    ids: Object.keys(normalizedLists.entities.cards)
}

export default {
    users,
    lists,
    cards,
}