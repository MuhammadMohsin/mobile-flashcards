import React, { Component } from 'react';
import { Container, Button, Content, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { addCard } from '../utils/dataService';

export default class AddCard extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {this.props.navigation.state.params.deck.title}
                        </Text>
                        <Text style={styles.subTitle}>
                            {this.props.navigation.state.params.deck.questions.length}
                            Cards
                        </Text>
                    </View>   
                    <Button block style={styles.addBtn}>
                        <Text>Add Card</Text>
                    </Button>
                    <Button block success style={styles.addBtn}>
                        <Text>Start Quiz</Text>
                    </Button>
                    <Button block danger style={styles.addBtn}>
                        <Text>Delete Deck</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
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
