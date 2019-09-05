import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/decks';
import middleware from './store/middleware';
import Main from './components/Main';
import AddCard from './components/AddCard';

export default function App() {
  const store = createStore(reducer, middleware)

  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene key="login" component={Main} title="Flash Cards" />
          <Scene key="addCard" component={AddCard} title="AddCard" />
        </Stack>
      </Router>
    </Provider>
  );
}
