import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/decks';
import middleware from './store/middleware';
import Main from './components/Main';
import Deck from './components/Deck';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import { registerNotification } from './utils/notificationService';

export default class App extends Component {

  componentDidMount() {
    registerNotification();
  }

  store = createStore(reducer, middleware)

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <Stack key="root">
            <Scene key="main" component={Main} title="Flash Cards" />
            <Scene key="deck" component={Deck} title="Deck" />
            <Scene key="addCard" component={AddCard} title="Add Card" />
            <Scene key="quiz" component={Quiz} title="Quiz" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
