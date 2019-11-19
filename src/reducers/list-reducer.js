import { lists as defaultLists } from '../normalized-state';

const listReducer = (lists = defaultLists, action) => {
    if (action.type === 'CARD_CREATE') {
        const { listId, cardId } = action.payload;
        const entities = { ...lists.entities };

        entities[listId] = {
            ...entities[listId],
            cards: [...entities[listId].cards, cardId],
        }

        return {
            ...lists,
            entities,
        }
    }
    return lists;
}

export default listReducer;