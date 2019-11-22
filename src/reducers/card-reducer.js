import { cards as defaultCards } from '../normalized-state';
import { addEntity } from './_utilities';


const cardReducer = (cards = defaultCards, action) => {
    if (action.type === 'CARD_CREATE') {
        const { card, cardId } = action.payload;

        return addEntity(cards, card, cardId);
    }
    return cards;
}

export default cardReducer;