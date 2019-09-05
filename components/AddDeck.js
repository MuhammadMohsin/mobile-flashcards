import React, { Component } from 'react';
import { Container, Button, Content, Form, Item, Input, Label, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addDeck } from '../store/actions/decks';

class AddDeck extends Component {

  state = {
    title: ''
  }

  handleAdd = () => {
    const { title } = this.state;
    this.props.dispatch(addDeck(title))
    Actions.addCard({
      deck: {
        title: title,
        questions: []
      }
    });
    this.setState({ title: '' });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Enter Deck Name</Label>
              <Input
                value={this.state.title}
                onChangeText={(text) => this.setState({ title: text.trim().replace(/ /g,"_") })} />
            </Item>
            <Button block
              onPress={this.handleAdd}
              style={styles.addBtn}
              disabled={!!!this.state.title}>
              <Text>Add Deck</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  addBtn: {
    marginTop: 20,
    padding: 10
  }
})

export default connect()(AddDeck)