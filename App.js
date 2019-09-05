import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/decks';
import middleware from './store/middleware';
import Main from './components/Main';
import Deck from './components/Deck';

export default function App() {
  const store = createStore(reducer, middleware)

  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="main" component={Main} title="Flash Cards" />
          <Scene key="deck" component={Deck} title="Deck" />
        </Stack>
      </Router>
    </Provider>
  );
}
