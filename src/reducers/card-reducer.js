import { cards as defaultCards } from '../normalized-state';

const cardReducer = (cards = defaultCards, action) => {
    if (action.type === 'CARD_CREATE') {
        const { card, cardId } = action.payload;
        return {
            entities: { ...cards.entities, [cardId]: card },
            id: [ ...cards.ids, cardId],
        }
    }
    return cards;
}

export default cardReducer;