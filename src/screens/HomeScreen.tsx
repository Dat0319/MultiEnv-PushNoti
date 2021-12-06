import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {useTranslation} from 'react-i18next';

export default function HomeScreen() {
  const {t} = useTranslation();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.requestPermissions();
    } else {
      PushNotification.createChannel(
        {
          channelId: 'test-channel', // (required)
          channelName: 'My channel', // (required)
          channelDescription: 'A channel to categorize your notifications', // (optional) default: undefined.
          playSound: false, // (optional) default: true
          soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
          vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
        },
        (created: boolean) =>
          console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
      );
    }
  }, []);

  return (
    <View style={styles.home}>
      <Text>{t('common:hello')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
