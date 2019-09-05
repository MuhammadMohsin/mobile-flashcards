import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getAll } from '../store/actions/decks';

class Decks extends Component {

    state = {
        decks: []
    }

    componentDidMount() {
        this.props.dispatch(getAll());
    }

    static getDerivedStateFromProps(props) {
        
        if (props.decks && props.decks.length){
            console.log(JSON.stringify(props.decks))
            return { decks: props.decks }
        }
        return null;
    }

    render() {
        const { decks } = this.state;
        return (
            <Container>
                <Content>
                    <List>
                        {decks.map(deck =>
                            <ListItem key={deck.title} button onPress={() => { Actions.addCard({ deck }) }}>
                                <Left key={deck.title}>
                                    <Text>{deck.title}</Text>
                                </Left>
                                <Right key={deck.title}>
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
function mapStateToProps(decks) {
    return {
        decks: Object.values(decks)
    }
}
export default connect(mapStateToProps)(Decks)