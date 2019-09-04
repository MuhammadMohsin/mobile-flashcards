import React from 'react';
import Main from './components/Main';
import AddCard from './components/AddCard';
import { Router, Stack, Scene } from 'react-native-router-flux';

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="login" component={Main} title="Flash Cards"/>
        <Scene key="addCard" component={AddCard} title="AddCard" />
      </Stack>
    </Router>
  );
}
