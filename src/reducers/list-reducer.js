import { lists as defaultLists } from '../normalized-state';
import { addChildToEntity } from './_utilities';


const listReducer = (lists = defaultLists, action) => {
    if (action.type === 'CARD_CREATE') {
        const { listId, cardId } = action.payload;

        return addChildToEntity(lists, listId, 'cards', cardId);
    }
    return lists;
}

export default listReducer;