import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Decks from './Decks';
import AddDeck from './AddDeck';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading={
                        <TabHeading>
                            <Icon name="list" />
                            <Text>Decks</Text>
                        </TabHeading>}>
                        <Decks />
                    </Tab>
                    <Tab heading={
                        <TabHeading>
                            <Icon name="add" />
                            <Text>Add Deck</Text>
                        </TabHeading>}>
                        <AddDeck />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}