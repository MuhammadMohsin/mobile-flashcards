import React from 'react';
import { Container, Button, Content, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { resetNotifications, registerNotification } from '../utils/notificationService';

export default function Quiz({ goBack, restartQuiz, totalCorrectAns, totalQuestions }) {

    resetNotifications()
        .then(registerNotification);
    return (
        <Container style={styles.container}>
            <Content>
                <Text style={styles.message}>You have got
                    {" " + ((totalCorrectAns / totalQuestions) * 100).toFixed(2)}%
                    in this quiz!
                </Text>
                <Text style={styles.subResult}>
                    You have attempted {totalCorrectAns} correct answers
                    out of {"" + totalQuestions} questions.
                </Text>
                <View style={styles.btnContainer}>
                    <Button block success
                        onPress={restartQuiz}
                        style={styles.submitBtn}>
                        <Text>Restart Quiz</Text>
                    </Button>
                    <Button block info
                        onPress={goBack}
                        style={styles.submitBtn}>
                        <Text>Go Back</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    );
}

var styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    message: {
        fontSize: 19,
        fontWeight: "600"
    },
    btnContainer: {
        marginTop: 100
    },
    subResult: {
        fontSize: 16,
        marginTop: 15
    },
    submitBtn: {
        marginTop: 20,
        padding: 10
    }
})
