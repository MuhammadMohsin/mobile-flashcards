
import {
    SET_ALL_DECKS,
    GET_ALL_DECKS,
    ADD_DECK,
    GET_DECK,
    DELETE_DECK,
    ADD_NEW_CARD
} from '../actions/decks'

let decks = {};
export default function decksReducer(state = {}, action) {
    switch (action.type) {
        case SET_ALL_DECKS:
            return Object.assign({}, state, action.decks)
        case GET_ALL_DECKS:
            return {
                ...state
            }
        case ADD_DECK:
            decks = { ...state }
            decks[action.title] = {
                title: action.title,
                questions: []
            };
            return Object.assign({}, decks);
        case GET_DECK:
            decks = { ...state };
            return decks[action.title]
        case DELETE_DECK:
            decks = { ...state };
            delete decks[action.title]
            return Object.assign({}, decks);
        case ADD_NEW_CARD:
            decks = { ...state }
            decks[action.title].questions.push(
                {
                    question: action.questionText,
                    answer: action.answerText
                }
            )
            return Object.assign({}, decks);

        default:
            return state
    }
}