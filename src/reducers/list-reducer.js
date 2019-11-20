import set from 'lodash/fp/set';
import { lists as defaultLists } from '../normalized-state';


const listReducer = (lists = defaultLists, action) => {
    if (action.type === 'CARD_CREATE') {
        const { listId, cardId } = action.payload;

        const cards = [...lists.entities[listId].cards, cardId];
        return set(['entities', listId, 'cards'], cards, lists);
    }
    return lists;
}

export default listReducer;