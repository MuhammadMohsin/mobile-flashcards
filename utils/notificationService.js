import { AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
const NOTIFICATION_KEY = 'flashCardNotifications'

export function resetNotifications() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function registerNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            const nextReminder = new Date()
                            nextReminder.setDate(nextReminder.getDate() + 1)
                            nextReminder.setHours(20)
                            nextReminder.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                {
                                    title: 'Quiz is waiting for you!',
                                    body: "Want to learn something new today? Just come up!",
                                    ios: {
                                        sound: true,
                                    },
                                    android: {
                                        sticky: false,
                                        vibrate: true,
                                        sound: true,
                                        priority: 'high'
                                    }
                                },
                                {
                                    time: nextReminder,
                                    repeat: 'day',
                                }
                            )
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}