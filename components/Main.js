import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Text } from 'native-base';
import Decks from './Decks';
import AddDeck from './AddDeck';

export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Text>
                        Flash Cards
            </Text>
                </Header>
                <Tabs>
                    <Tab heading="Decks">
                        <Decks />
                    </Tab>
                    <Tab heading="Add Deck">
                        <AddDeck />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
