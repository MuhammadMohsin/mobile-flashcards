import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import { getAllDecks } from '../utils/dataService';

export default class Decks extends Component {

    state = {
        decks: []
    }

    componentDidMount() {
        const decks = Object.values(getAllDecks());
        this.setState({ decks })
    }

    render() {
        const { decks } = this.state;

        return (
            <Container>
                <Content>
                    <List>
                        {decks.map(deck =>
                            <ListItem key={deck.title}>
                                <Left>
                                    <Text>{deck.title}</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        )}
                    </List>
                </Content>
            </Container>
        );
    }
}