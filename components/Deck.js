import React, { Component } from 'react';
import { Container, Button, Content, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { deleteDeck } from '../store/actions/decks';

class Deck extends Component {

    state = {
        deck: {}
    }

    handleDelete = () => {
        this.props.dispatch(deleteDeck(this.props.title));
        Actions.pop();
    }

    handleAddCard = (title) => {
        Actions.addCard({title: title})
    }

    handleStartQuiz = (title) =>{
        Actions.quiz({title: title});
    }

    static getDerivedStateFromProps(props) {
        if (props.decks && Object.values( props.decks).length ) {
            const title = props.title;
            return { deck: props.decks[title] || {} }
        }
        return null;
    }

    render() {
        const { deck } = this.state;
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {deck.title}
                        </Text>
                        <Text style={styles.subTitle}>
                            {deck.questions && deck.questions.length?
                            deck.questions.length + " ": 0 + " "}
                             Cards
                        </Text>
                    </View>
                    <Button block style={styles.addBtn} onPress={()=>this.handleAddCard(deck.title)}>
                        <Text>Add Card</Text>
                    </Button>
                    <Button block success style={styles.addBtn} onPress={()=>this.handleStartQuiz(deck.title)}>
                        <Text>Start Quiz</Text>
                    </Button>
                    <Button block danger style={styles.addBtn} onPress={this.handleDelete}>
                        <Text>Delete Deck</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    titleContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        height: 200
    },
    title: {
        fontSize: 18
    },
    subTitle: {
        fontSize: 15,
        marginTop: 30,
        paddingRight: 5
    },
    addBtn: {
        marginTop: 20,
        padding: 10
    }
})
function mapStateToProps(decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(Deck);