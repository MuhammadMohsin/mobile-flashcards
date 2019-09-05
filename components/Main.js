import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { connect } from 'react-redux';
import { setAllDecks } from '../store/actions/decks';
import { getAllDecks } from '../utils/dataService';
import Decks from './Decks';
import AddDeck from './AddDeck';

class Main extends Component {

    componentDidMount() {
        const decks = getAllDecks();
        this.props.dispatch(setAllDecks(decks));
    }

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
export default connect()(Main)