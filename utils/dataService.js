let decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function getAllDecks() {
    return { ...decks };
}

export function addDeck(key) {
    decks[key] = {
        title: key,
        questions: []
    };
    return {...decks[key]};
}

export function deleteDeck(key) {
    delete decks[key];
}

export function getDeck(key) {
    return decks[key];
}

export function addCard(key, questionText, answerText) {
    decks[key].questions.push(
        {
            question: questionText,
            answer: answerText
        }
    )
}