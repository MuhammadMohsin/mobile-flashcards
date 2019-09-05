import React, { Component } from 'react';
import { Container, Button, Content, Form, Item, Input, Label, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { addCard } from '../store/actions/decks';

class AddCard extends Component {

  state = {
    question: '',
    answer: ''
  }

  handleAdd = () => {
    const { question, answer } = this.state;
    const title = this.props.title;
    this.props.dispatch(addCard(title, question, answer))
    this.setState({ question: '', answer: '' });
    Actions.pop();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Enter Question</Label>
              <Input
                value={this.state.question}
                onChangeText={(text) => this.setState({ question: text.trim() })} />
            </Item>
            <Item floatingLabel>
              <Label>Enter Answer</Label>
              <Input
                value={this.state.answer}
                onChangeText={(text) => this.setState({ answer: text.trim() })} />
            </Item>
            <Button block
              onPress={this.handleAdd}
              style={styles.addBtn}
              disabled={!!!(this.state.question && this.state.answer)}>
              <Text>Add Card</Text>
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

export default connect()(AddCard)