import React, { Component } from 'react';
import { Container, Button, Content, Form, Item, Input, Label, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { addDeck } from '../utils/dataService';
import { Actions } from 'react-native-router-flux';

export default class AddDeck extends Component {

  state = {
    title: ''
  }

  handleAdd = () => {
    const { title } = this.state;
    const deck = addDeck(title);
    this.setState({ title: '' });
    Actions.addCard({ deck });
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
                onChangeText={(text) => this.setState({ title: text })} />
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
