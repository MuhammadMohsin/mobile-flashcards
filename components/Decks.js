import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Body, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { getAll } from '../store/actions/decks';

class Decks extends Component {

    state = {
        decks: []
    }

    componentDidMount() {
        this.props.dispatch(getAll());
    }

    static getDerivedStateFromProps(props, state) {

        if (props.decks && props.decks.length) {
            return { decks: props.decks }
        }
        else if (props.decks && props.decks.length !== state.decks)
            return { decks: [] }
        return null;
    }

    render() {
        const { decks } = this.state;
        if (!decks.length)
            return (
                <Text style={styles.warningMsg}>
                    You do not have any deck in your list!
                </Text>)
        return (
            <Container>
                <Content>
                    <List>
                        {decks.map(deck =>
                            <ListItem key={deck.title} button onPress={() => { Actions.deck({ title: deck.title }) }}>
                                <Body>
                                    <Text style={styles.title}>{deck.title}</Text>
                                    <Text style={styles.cardCount}>{deck.questions.length > 1 ?
                                        deck.questions.length  + " Cards":
                                        deck.questions.length  + " Card"}
                                    </Text>
                                </Body>
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
const styles = StyleSheet.create({
    warningMsg: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 18
    },
    cardCount: {
        fontSize: 13,
        color: '#545454'
    }
})
function mapStateToProps(decks) {
    return {
        decks: Object.values(decks)
    }
}
export default connect(mapStateToProps)(Decks)