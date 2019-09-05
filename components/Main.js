import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { connect } from 'react-redux';
import { setAllDecks } from '../store/actions/decks';
import { getAllDecks } from '../utils/dataService';
import Decks from './Decks';
import AddDeck from './AddDeck';

class Main extends Component {

    componentDidMount() {
        if (!(this.props.decks && this.props.decks.length)) {
            const decks = getAllDecks();
            this.props.dispatch(setAllDecks(decks));
        }
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
function mapStateToProps(decks) {
    return {
        decks: Object.values(decks)
    }
}
export default connect(mapStateToProps)(Main)