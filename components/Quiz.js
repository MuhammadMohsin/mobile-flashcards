import React, { Component } from 'react';
import { Container, Button, Content, CheckBox, Text, View, Label } from 'native-base';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Result from './Result';

class Quiz extends Component {

  state = {
    deck: {},
    questionIndex: 0,
    showAns: false,
    showResult: false,
    correctAns: 0
  }

  static getDerivedStateFromProps(props) {
    if (props.decks && Object.values(props.decks).length) {
      const title = props.title;
      return { deck: props.decks[title] || {} }
    }
    return null;
  }

  handleSubmit = (isCorrect) => {
    this.setState(state => {
      if (state.questionIndex < state.deck.questions.length - 1)
        return {
          questionIndex: state.questionIndex + 1,
          showAns: false,
          correctAns: isCorrect ? state.correctAns + 1 : state.correctAns
        }
      return {
        showResult: true,
        showAns: false,
        correctAns: isCorrect ? state.correctAns + 1 : state.correctAns
      }
    })
  }

  handleShowAnswer = () => {
    this.setState(state => {
      return { showAns: !state.showAns }
    })
  }

  restartQuiz = () => {
    this.setState({
      questionIndex: 0,
      showAns: false,
      showResult: false,
      correctAns: 0
    });
  }

  goBack = () => {
    Actions.pop();
  }

  render() {
    const { showAns, showResult, questionIndex, deck: { questions }, correctAns } = this.state;
    if (showResult)
      return (
        <Result
          restartQuiz={this.restartQuiz}
          goBack={this.goBack}
          totalCorrectAns={correctAns}
          totalQuestions={questions.length} />
      )
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.quizContainer}>
            <Text style={styles.count}>
              {questionIndex + 1} out of {questions.length}
            </Text>
            <Text style={styles.question}> {questions[questionIndex].question}</Text>
            <Text style={styles.answer}>{questions[questionIndex].answer}</Text>
          </View>
          <Button block warning
            onPress={() => { this.handleSubmit(false) }}
            style={styles.submitBtn}>
            <Text>Incorrect</Text>
          </Button>
          <Button block
            onPress={() => { this.handleSubmit(true) }}
            style={styles.submitBtn}>
            <Text>Correct</Text>
          </Button>
          <View style={styles.showAns}>
            <CheckBox checked={showAns} onPress={this.handleShowAnswer} />
            <Text>Show Answer?</Text>
          </View>
          {showAns ? <Text style={styles.answer}>
            {questions[questionIndex].answer}
          </Text> : null}
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  count: {
    textAlign: "center",
    fontSize: 12,
    marginBottom: 10
  },
  quizContainer: {
    minHeight: 200
  },
  question: {
    fontSize: 19,
    fontWeight: "600"
  },
  answer: {
    fontSize: 16,
    marginTop: 15
  },
  showAns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    fontSize: 15,
    marginTop: 15
  },
  submitBtn: {
    marginTop: 20,
    padding: 10
  }
})

function mapStateToProps(decks) {
  return {
    decks
  }
}
export default connect(mapStateToProps)(Quiz)