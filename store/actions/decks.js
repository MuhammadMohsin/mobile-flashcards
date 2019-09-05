export const SET_ALL_DECKS = "SET_ALL_DECKS";
export const GET_ALL_DECKS = "GET_ALL_DECKS";
export const ADD_DECK = "ADD_DECK";
export const GET_DECK = "GET_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_NEW_CARD = "ADD_NEW_CARD";

export function setAllDecks(decks) {
    return {
        type: SET_ALL_DECKS,
        decks
    }
}
export function getAll() {
    return {
        type: GET_ALL_DECKS
    }
}
export function addDeck(title) {
    return {
        type: ADD_DECK,
        title
    }
}
export function getDeck(key) {
    return {
        type: GET_DECK,
        title: key
    }
}
export function deleteDeck(key) {
    return {
        type: DELETE_DECK,
        title: key
    }
}
export function addCard(key) {
    return {
        type: ADD_NEW_CARD,
        title: key,
        questionText: question,
        answerText: answer
    }
}