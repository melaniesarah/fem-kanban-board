import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';

const defaultCardData = {
    title: '',
    description: '',
    assignedTo: '',
};

const mapDispatchToProps = (dispatch) => {
    return {
        createCard(listId, cardData) {
            const cardId = Date.now().toString();
            const card = {
                id: cardId,
                ...defaultCardData,
                ...cardData,
            };
            dispatch({
                type: 'CARD_CREATE',
                payload: { listId, cardId, card },   
            });
        },
    };
};

export default connect(null, mapDispatchToProps)(CreateCard);

