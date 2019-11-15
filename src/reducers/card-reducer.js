import { cards as defaultCards } from '../normalized-state';

const cardReducer = (cards = defaultCards, action) => {
    console.log(cards, action);
    return cards;
}

export default cardReducer;